import React from 'react'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import NewsContent from '../components/NewsContent'


export default function News() {

  return (
    <MainLayout>
      <Head>
        <title>Tourism: News</title>
      </Head>
          
          <div className="flex">
            <NewsContent />
          </div>
          
    </MainLayout>
  )

}