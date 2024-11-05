import React, { useEffect } from 'react'
import renderWhenReady from 'browser/helpers/renderWhenReady'

const ProjectEditor = () => {

  useEffect(() => {
    newProject();
  }, [])
  const newProject = async () => {
    await window.sideAPI.projects.new()
  }

  return (
   <>
   </>
  )
}

renderWhenReady(ProjectEditor)
