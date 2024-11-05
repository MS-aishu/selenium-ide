import React from 'react'
import TabPanel from '../Tab/Panel'
import {TESTS_TAB } from '../../enums/tab'
import TestsTab from '../../windows/ProjectEditor/tabs/Tests/TestsTab'
import { SIDEMainProps } from '../types'

const SIDEMain: React.FC<Pick<SIDEMainProps, 'setTab' | 'tab'>> = ({
  tab,
}) => (
  <>
    <TabPanel index={TESTS_TAB} value={tab}>
      <TestsTab />
    </TabPanel>
  </>
)

export default SIDEMain
