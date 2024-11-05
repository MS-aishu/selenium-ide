import React from 'react'
import TestControls from 'browser/windows/ProjectEditor/tabs/Tests/Controls'
import { TESTS_TAB } from 'browser/enums/tab'
import { SIDEMainProps } from '../types'
import AppBarTabs from './AppBarTabs'
import Paper from '@mui/material/Paper'
import TabPanel from '../Tab/Panel'

type SIDEAppBarProps = Pick<SIDEMainProps, 'setTab' | 'tab'>

const SIDEAppBar: React.FC<SIDEAppBarProps> = ({ setTab, tab }) => {
  return (
    <Paper className="flex flex-row width-100 z-3" elevation={1} square>
      <AppBarTabs setTab={setTab} tab={tab} />
      <div className="flex flex-1" />
      <TabPanel index={TESTS_TAB} value={tab}>
        <TestControls />
      </TabPanel>
    </Paper>
  )
}

export default SIDEAppBar
