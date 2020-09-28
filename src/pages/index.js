import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MainSlider from '../components/MainSlider'
import MainNews from '../components/MainNews'
import MainProject from '../components/MainProject'


export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Tourism</title>
      </Head>

      <main className="flex">
        <Sidebar />
        <div className="content">
          <Header />

          <MainSlider />

          <MainNews />

          <MainProject />
          
        </div>
      </main>

    </div>
  )
}
