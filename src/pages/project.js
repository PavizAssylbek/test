import React from 'react'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

import ProjectContent from '../components/ProjectContent'


export default function Project() {

  return (
    <MainLayout>
      <Head>
        <title>Tourism: Project</title>
      </Head>

          
      <div className="flex">
        <ProjectContent />
      </div>
          
    </MainLayout>
  )

}