import React from 'react'
import { CourseInfoWrapper } from '../components/CourseInfoWrapper'
import { Sidebar } from '../components/Sidebar'

export const CourseInfoPage = () => {
  return (
    <div className='container-fluid g-0'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar'>
          <Sidebar/>
          
        </div>
        <div className='col-sm-12 col-md-6 col-lg-10'>
          <CourseInfoWrapper/>
        </div>
      </div>
    </div>
  )
}
