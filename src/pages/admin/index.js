import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../components/AdminLayout'
import AdminNewsComponent from '../../components/AdminNewsComponent'
import AdminWebinarsComponent from '../../components/AdminWebinarsComponent'


export default function AdminPanel() {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
        <meta name="viewport" content='width=1640' />
      </Head>
          
        <div className="container">
          <h6 className="adminText">Добро пожалловать в систему управления «Туризм онлайн»</h6>

          <AdminNewsComponent title={'Новости'} smalltitle={'новость'} link={'/admin/news'} bool={true} />
          <AdminNewsComponent title={'Публикации'} smalltitle={'публикацию'} link={'/admin/project'} bool={true} />
          <AdminWebinarsComponent title={'Вебинары'} link={'/admin/webinars'} bool={true} />
        </div>
          
    </AdminLayout>
  )

}