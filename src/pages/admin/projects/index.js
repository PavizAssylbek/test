import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminNewsComponent from '../../../components/AdminNewsComponent'


export default function AdminProject({data}) {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
          
        <div className="container">
          <AdminNewsComponent title={'Публикации'} data={data.project} smalltitle={'публикацию'} />
        </div>
          
    </AdminLayout>
  )

}

export async function getServerSideProps(context) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  const res = await fetch(`${BASE_URL}/api/projects`)
  const project = await res.json()

  const data = {
    project
  }
  
  return { props: { data } }
}

