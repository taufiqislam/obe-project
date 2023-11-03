import React from 'react'
import { KnowledgeWrapper } from './KnowldedgeWrapper'
import { SkillWrapper } from './SkillWrapper'
import { AttitudeWrapper } from './AttitudeWrapper'
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'

export const IloWrapper = () => {
  return (
    <div className='Wrapper' id='ilo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
            <p>Course: CSE-356</p>
          </div>
          <div className='col-4 Heading2'>
            <h2 >Intended Learning Outcomes (ILO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <KnowledgeWrapper/>
        <SkillWrapper/>
        <AttitudeWrapper/>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/cloploreasoning'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/courseassessment'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>

    </div>
  )
}
