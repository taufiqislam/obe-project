import React from 'react'
import { PeoWrapper } from '../components/PeoWrapper'
import { Sidebar } from '../components/Sidebar'

export const PeoPage = () => {
  return (
    <div className='container-fluid g-0'>
      <div className='row min-vh-100'>
        <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar'>
          <Sidebar/>
          
        </div>
        <div className='col-sm-12 col-md-6 col-lg-10'>
          <PeoWrapper/>
        </div>
      </div>
    </div>
  )
}
