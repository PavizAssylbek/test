import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../../components/AdminLayout'
import AdminEditsComponent from '../../../components/AdminEditsComponent'


export default function insideAdminProject({project}) {
console.log("insideAdminProject -> project", project)

  return (
    <AdminLayout>
      <Head>
        <title>Tourism: AdminPanel</title>
      </Head>
          
        <div className="container">
          <AdminEditsComponent title={'Добавление публикации'} data={project} link={'/admin'} />
        </div>
          
    </AdminLayout>
  )
}

export async function getServerSideProps(context) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const {id} = context.query

  const project_res = await fetch(`${BASE_URL}/api/projects/${id}`)
  const project = await project_res.json()

  
  return { props: { project } }
}