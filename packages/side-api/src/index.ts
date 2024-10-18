import { BaseApi } from './types/base'
import { commands as channels } from './commands/channels'
import { commands as dialogs } from './commands/dialogs'
import { commands as driver } from './commands/driver'
import { commands as menus } from './commands/menus'
import { commands as playback } from './commands/playback'
import { commands as plugins } from './commands/plugins'
import { commands as projects } from './commands/projects'
import { commands as recorder } from './commands/recorder'
import { commands as resizablePanels } from './commands/resizable-panels'
import { commands as state } from './commands/state'
import { commands as system } from './commands/system'
import { commands as tests } from './commands/tests'
import { commands as windows } from './commands/windows'

export interface ApiHoist extends BaseApi {
  channels: typeof channels
  dialogs: typeof dialogs
  driver: typeof driver
  menus: typeof menus
  playback: typeof playback
  plugins: typeof plugins
  projects: typeof projects
  recorder: typeof recorder
  resizablePanels: typeof resizablePanels
  state: typeof state
  system: typeof system
  tests: typeof tests
  windows: typeof windows
}

export const api: ApiHoist = {
  channels,
  dialogs,
  driver,
  menus,
  playback,
  plugins,
  projects,
  recorder,
  resizablePanels,
  state,
  system,
  tests,
  windows,
}

export * from './helpers'
export * from './models'
export * from './process'
export * from './types'

export default api
