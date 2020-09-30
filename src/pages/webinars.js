import React from 'react'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

import WebinarsContent from '../components/WebinarsContent'


export default function Webinars() {

  return (
    <MainLayout>
      <Head>
        <title>Tourism: Webinars</title>
      </Head>

          
          <div className="flex">
            <WebinarsContent />
          </div>
    </MainLayout>
  )

}