import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminNewsComponent from '../../../components/AdminNewsComponent'


export default function AdminNews() {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
          
        <div className="container">
          <AdminNewsComponent title={'Новости'} smalltitle={'новость'} />
        </div>
          
    </AdminLayout>
  )

}