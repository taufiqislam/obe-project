import React from 'react'
import Curriculum from '../components/Curriculum'
import { Sidebar } from '../components/Sidebar'

export const CurriculumPage = () => {
  return (
    <div className='container-fluid g-0'>
    <div className='row min-vh-100'>
      <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar'>
        <Sidebar/>
        
      </div>
      <div className='col-sm-12 col-md-6 col-lg-10'>
        <Curriculum/>
      </div>
    </div>
  </div>
  )
}
export default CurriculumPage

