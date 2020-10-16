import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminNewsComponent from '../../../components/AdminNewsComponent'


export default function AdminProject() {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
          
        <div className="container">
          <AdminNewsComponent title={'Публикации'} smalltitle={'публикацию'} />
        </div>
          
    </AdminLayout>
  )

}