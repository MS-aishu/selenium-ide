import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import AppWrapper from 'browser/components/AppWrapper'
import React, { useEffect } from 'react'
import renderWhenReady from 'browser/helpers/renderWhenReady'
import languageMap from 'browser/I18N/keys'
import { FormattedMessage } from 'react-intl'

const ProjectEditor = () => {

  useEffect(() => {
    newProject();
  }, [])
  const newProject = async () => {
    await window.sideAPI.projects.new()
  }

  return (
    <AppWrapper>
      <Grid className="centered pt-4" container spacing={2}>
        <Grid item xs={6}>
          <Button data-new-project onClick={newProject} variant="outlined">
            <FormattedMessage id={languageMap.splash.createProject} />
          </Button>
        </Grid>
      </Grid>
    </AppWrapper>
  )
}

renderWhenReady(ProjectEditor)
