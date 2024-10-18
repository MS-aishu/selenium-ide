import { type Shape as Channels } from '../commands/channels'
import { type Shape as Dialogs } from '../commands/dialogs'
import { type Shape as Driver } from '../commands/driver'
import { type Shape as Menus } from '../commands/menus'
import { type Shape as Playback } from '../commands/playback'
import { type Shape as Plugins } from '../commands/plugins'
import { type Shape as Projects } from '../commands/projects'
import { type Shape as Recorder } from '../commands/recorder'
import { type Shape as ResizablePanels } from '../commands/resizable-panels'
import { type Shape as State } from '../commands/state'
import { type Shape as System } from '../commands/system'
import { type Shape as Tests } from '../commands/tests'
import { type Shape as Windows } from '../commands/windows'

/**
 * The full API usable by Selenium IDE
 */
export type Api = {
  channels: Channels
  dialogs: Dialogs
  driver: Driver
  menus: Menus
  playback: Playback
  plugins: Plugins
  projects: Projects
  recorder: Recorder
  resizablePanels: ResizablePanels
  state: State
  system: System
  tests: Tests
  windows: Windows
}

export type ApiOverrides = {
  [P in keyof Api]?: Partial<Record<keyof Api[P], any>>
}
