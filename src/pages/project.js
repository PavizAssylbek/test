import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import ProjectContent from '../components/ProjectContent'


export default function Project() {

  return (
    <div className="news">
      <Head>
        <title>Tourism: Project</title>
      </Head>

      <main className="flex">
        <Sidebar />
        <div className="content">
          <Header />
          
          <div className="flex">
            <ProjectContent />
          </div>
          
        </div>
      </main>
    </div>
  )

}