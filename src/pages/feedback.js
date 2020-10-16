import React from 'react'
import Head from 'next/head'
import FeedBackComponent from '../components/FeedBackComponent'
import MainLayout from '../components/MainLayout'


export default function FeedBack() {
  return (
    <MainLayout>
      <Head>
        <title>Tourism: Online</title>
      </Head>

      <FeedBackComponent />
          

    </MainLayout>
  )
}
