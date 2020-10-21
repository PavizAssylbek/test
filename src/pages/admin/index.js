import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../components/AdminLayout'
import AdminNewsComponent from '../../components/AdminNewsComponent'
import AdminWebinarsComponent from '../../components/AdminWebinarsComponent'
import { withTranslation } from '../../../i18n'


function AdminPanel({data}) {

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
        <meta name="viewport" content='width=1640' />
      </Head>
          
        <div className="container">
          <h6 className="adminText">Добро пожалловать в систему управления «Туризм онлайн»</h6>

          <AdminNewsComponent title={'Новости'} data={data.news} smalltitle={'новость'} link={'/admin/news'} bool={true} />
          <AdminNewsComponent title={'Публикации'} data={data.project} smalltitle={'публикацию'} link={'/admin/projects'} bool={true} />
          <AdminWebinarsComponent title={'Вебинары'} link={'/admin/webinars'} bool={true} />
        </div>
          
    </AdminLayout>
  )

}

export async function getServerSideProps(context) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  const new_res = await fetch(`${BASE_URL}/api/news`)
  const news = await new_res.json()

  const res = await fetch(`${BASE_URL}/api/projects`)
  const project = await res.json()

  const data = {
    project,
    news
  }
  
  return { props: { data, namespacesRequired: ['common', 'header'] } }
}

export default withTranslation('common')(AdminPanel)


