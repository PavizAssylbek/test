import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminEditsComponent from '../../../components/AdminEditsComponent'


export default function insideAdminNews({news}) {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
        <div className="container">
          <AdminEditsComponent title={'Добавление новости'} data={news} link={'/admin'} save={false} />
        </div>
    </AdminLayout>
  )
}

export async function getServerSideProps(context) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const {id} = context.query
  
  if(id !== 'new') {
    const new_res = await fetch(`${BASE_URL}/api/news/${id}`)
    const news = await new_res.json()

    return { props: { news } }
  } else {
    return { props: {} }
  }

}