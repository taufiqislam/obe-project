import React from 'react'

import { Sidebar } from '../components/Sidebar'
import Addcourse from '../components/Addcourse'


export const AddCoursePage = () => {
  return (
    <div className='container-fluid g-0'>
      <div className='row min-vh-100'>
        <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar'>
          <Sidebar/>
          
        </div>
        <div className='col-sm-12 col-md-6 col-lg-10'>
          <Addcourse/>
        </div>
      </div>
    </div>
  )
}


