import React, {useContext, useState} from 'react'
import { PeoForm } from './PeoForm'
import {v4 as uuidv4} from 'uuid'
import { Peo } from './Peo'
import { EditPeoForm } from './EditPeoForm';
import MissionPeoContext from "./Context/MissionPeoContext";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
uuidv4()

export const PeoWrapper = () => {

    const {peos,addPeo,deletePeo,editPeo,editDescription} = useContext(MissionPeoContext);
    
  return (
    <div className='Wrapper' id='peo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
          </div>
          <div className='col-4 Heading2'>
            <h2>Program Educational Outcomes (PEO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <PeoForm addPeo={addPeo}/>
        <table className='table table-bordered table-hover text-center border-dark'>
          <thead>
            <tr>
              <th>PEO ID</th>
              <th>PEO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {peos.map((peo, index) => (
              
              peo.isEditing ? (
                <EditPeoForm editPeo={editDescription} description={peo}/>
              ) : (
                <Peo description={peo} key={peo.id} index={index} deletePeo={deletePeo} editPeo={editPeo}/>
                )))
                
            }
          </tbody>
        </table>
        
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/curriculum'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/peomapmission'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}
