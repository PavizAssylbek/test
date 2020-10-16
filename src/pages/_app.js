import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../../i18n'

import '../styles/globals.scss'
import 'swiper/swiper-bundle.min.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)
