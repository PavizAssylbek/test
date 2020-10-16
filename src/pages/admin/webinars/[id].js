import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminEditsComponent from '../../../components/AdminEditsComponent'


export default function insideAdminWebinar() {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
          
        <div className="container">
          <AdminEditsComponent title={'Создать вебинар'} link={'/admin'} save={true} />
        </div>
          
    </AdminLayout>
  )


}