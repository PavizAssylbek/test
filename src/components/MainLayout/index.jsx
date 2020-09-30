import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'


export default function MainLayout({children}) {
  return (
    <div className="home">

      <main className="flex">
        <Sidebar />
        <div className="content">
          <Header />

          {children}
          
        </div>
      </main>
    </div>
  )
}