import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { CloWrapper } from '../components/CloWrapper'

export const CloPage = () => {
  return (
    <div className='container-fluid g-0 Page'>
      <div className='row min-vh-100'>
        <div className='col-sm-12 col-md-6 col-lg-2 Page'>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar fixed-top'>
          <Sidebar/>
          
        </div>
        <div className='col-sm-12 col-md-6 col-lg-10'>
          <CloWrapper/>
        </div>
      </div>
    </div>
  )
}
