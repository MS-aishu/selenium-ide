import kebabCase from 'lodash/fp/kebabCase'
import { fileWriter, LanguageEmitter } from 'side-code-export'
import BaseController from '../Base'

/**
 * This just contains a list of menus in the folder
 * and makes it easy to open a menu by specifying a name.
 */
export default class OutputFormatsController extends BaseController {
  customFormats: LanguageEmitter[] = []
  getFormats() {
    return this.customFormats
      .concat()
      .map((format) => format?.opts?.name)
  }
  async registerFormat(format: never) {
    this.customFormats.push(format)
  }
  async unregisterFormat(name: string) {
    const index = this.customFormats.findIndex((f) => f?.opts?.name === name)
    if (index === -1) return 0
    this.customFormats.splice(index, 1)
    return 1
  }
  async exportSuiteToFormat(formatName: string, suiteID: string) {
    const format: LanguageEmitter =
      this.customFormats.find((f) => f?.opts.name === formatName) as LanguageEmitter
    if (!format) throw new Error(`Format ${formatName} not found`)
    const project = await this.session.projects.getActive()
    const suiteName = project.suites.find((s) => s.id === suiteID)?.name!
    const outputPath = await this.session.dialogs.openSave(
      kebabCase(suiteName) + format.opts.fileExtension
    )
    if (outputPath.canceled) return
    const filepath = outputPath.filePath as string
    const suiteCode = await fileWriter.emitSuite(format, project, suiteName)

    return fileWriter.writeFile(
      filepath,
      suiteCode.body,
      this.session.projects.filepath
    )
  }
  async exportTestToFormat(formatName: string, testID: string) {
    const format: LanguageEmitter =
      this.customFormats.find((f) => f?.opts.name === formatName)  as LanguageEmitter
    if (!format) throw new Error(`Format ${formatName} not found`)
    const project = await this.session.projects.getActive()
    const testName = project.tests.find((t) => t.id === testID)!.name
    const outputPath = await this.session.dialogs.openSave(
      kebabCase(testName) + format.opts.fileExtension
    )
    if (outputPath.canceled) return
    const filepath = outputPath.filePath as string
    const testCode = await fileWriter.emitTest(format, project, testName)

    return fileWriter.writeFile(
      filepath,
      testCode.body,
      this.session.projects.filepath
    )
  }
}
