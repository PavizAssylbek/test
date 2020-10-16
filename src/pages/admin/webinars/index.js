import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminWebinarsComponent from '../../../components/AdminWebinarsComponent'


export default function AdminWebinars() {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
          
        <div className="container">
          <AdminWebinarsComponent title={'Вебинары'} link={'/admin'} bool={false} />
        </div>
          
    </AdminLayout>
  )

}