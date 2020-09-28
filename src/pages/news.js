import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import NewsContent from '../components/NewsContent'


export default function News() {

  return (
    <div className="news">
      <Head>
        <title>Tourism: News</title>
      </Head>

      <main className="flex">
        <Sidebar />
        <div className="content">
          <Header />
          
          <div className="flex">
            <NewsContent />
          </div>
          
        </div>
      </main>
    </div>
  )

}