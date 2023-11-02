import React from 'react'
import { VisionWrapper } from '../components/VisionWrapper'
import { Sidebar } from '../components/Sidebar'

export const VisionPage = () => {
  return (
    <div className='container-fluid g-0 Page'>
      <div className='row min-vh-100'>
        <div className='col-sm-12 col-md-6 col-lg-2 Page'>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar fixed-top'>
          <Sidebar/>
          
        </div>
        <div className='col-sm-12 col-md-6 col-lg-10'>
          <VisionWrapper/>
        </div>
      </div>
    </div>
  )
}
