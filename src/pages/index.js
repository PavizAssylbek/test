import React from 'react'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import MainSlider from '../components/MainSlider'
import MainNews from '../components/MainNews'
import MainProject from '../components/MainProject'
import MainWebinars from '../components/MainWebinars'

import { withTranslation } from '../../i18n'


const Home = ({t, data}) => {


  return (
    <MainLayout>
      <Head>
        <title>Tourism: Online</title>
      </Head>

      <MainSlider />

      <MainNews />

      <MainProject />

      <MainWebinars />
          

    </MainLayout>
  )
}

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'header'],
// })



export async function getServerSideProps(context) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${BASE_URL}/api/projects`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { 
    data, 
    namespacesRequired: ['common', 'header'] 
  } }
}

export default withTranslation('common')(Home)