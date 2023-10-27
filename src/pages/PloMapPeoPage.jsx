import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { PloMapPeoTable } from '../components/PloMapPeoTable'

export const PloMapPeoPage = () => {
  return (
    <div>
        <div className='container-fluid g-0'>
        <div className='row min-vh-100'>
            <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar'>
            <Sidebar/>
            
            </div>
            <div className='col-sm-12 col-md-6 col-lg-10'>
                <PloMapPeoTable/>
            </div>
        </div>
        </div>
    </div>
  )
}
