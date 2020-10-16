import React from 'react'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import MainSlider from '../components/MainSlider'
import MainNews from '../components/MainNews'
import MainProject from '../components/MainProject'
import MainWebinars from '../components/MainWebinars'

import { withTranslation } from '../../i18n'


const Home = ({t}) => {
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

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)