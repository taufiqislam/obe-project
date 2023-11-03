import React from 'react'
import { MissionWrapper } from '../components/MissionWrapper'
import { Sidebar } from '../components/Sidebar'

export const MissionPage = () => {
  return (
    <div className='container-fluid g-0 Page'>
      <div className='row min-vh-100'>
        <div className='col-sm-12 col-md-6 col-lg-2'>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar fixed-top'>
          <Sidebar/>
          
        </div>
        <div className='col-sm-12 col-md-6 col-lg-10'>
          <MissionWrapper/>
        </div>
      </div>
    </div>
  )
}
