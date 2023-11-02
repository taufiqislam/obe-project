import React from 'react'
import { PloWrapper } from '../components/PloWrapper'
import { Sidebar } from '../components/Sidebar'

export const PloPage = () => {
  return (
    <div className='container-fluid g-0 Page'>
      <div className='row min-vh-100'>
        <div className='col-sm-12 col-md-6 col-lg-2 Page'>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar fixed-top'>
          <Sidebar/>
          
        </div>
        <div className='col-sm-12 col-md-6 col-lg-10'>
          <PloWrapper/>
        </div>
      </div>
    </div>

  )
}
