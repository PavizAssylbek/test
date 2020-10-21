import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminNewsComponent from '../../../components/AdminNewsComponent'


export default function AdminNews({data}) {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
          
        <div className="container">
          <AdminNewsComponent title={'Новости'} data={data.news} smalltitle={'новость'} />
        </div>
          
    </AdminLayout>
  )
  
}

export async function getServerSideProps(context) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  const new_res = await fetch(`${BASE_URL}/api/news`)
  const news = await new_res.json()

  const data = {
    news
  }
  
  return { props: { data } }
}