import React from 'react'
import TabPanel from '../Tab/Panel'
import { PROJECT_TAB, SUITES_TAB, TESTS_TAB } from '../../enums/tab'
import ProjectTab from '../../tabs/Project/ProjectTab'
import SuitesTab from '../../tabs/Suites/SuitesTab'
import TestsTab from '../../tabs/Tests/TestsTab'
import { SIDEMainProps } from '../types'

const SIDEMain: React.FC<
  Pick<
    SIDEMainProps,
    'openDrawer' | 'session' | 'setOpenDrawer' | 'setTab' | 'tab'
  >
> = ({ openDrawer, session, setOpenDrawer, setTab, tab }) => (
  <>
    <TabPanel index={TESTS_TAB} value={tab}>
      <TestsTab
        openDrawer={openDrawer}
        session={session}
        setOpenDrawer={setOpenDrawer}
        setTab={setTab}
        tab={tab}
      />
    </TabPanel>
    <TabPanel index={SUITES_TAB} value={tab}>
      <SuitesTab
        openDrawer={openDrawer}
        session={session}
        setOpenDrawer={setOpenDrawer}
        setTab={setTab}
        tab={tab}
      />
    </TabPanel>
    <TabPanel index={PROJECT_TAB} value={tab}>
      <ProjectTab
        openDrawer={openDrawer}
        session={session}
        setOpenDrawer={setOpenDrawer}
        setTab={setTab}
        tab={tab}
      />
    </TabPanel>
  </>
)

export default SIDEMain
