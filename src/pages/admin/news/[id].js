import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminEditsComponent from '../../../components/AdminEditsComponent'


export default function insideAdminNews() {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
          
        <div className="container">
          <AdminEditsComponent title={'Добавление новости'} link={'/admin'} />
        </div>
          
    </AdminLayout>
  )


}