import React, {useContext, useState} from 'react'
import { PloForm } from './PloForm'
import {v4 as uuidv4} from 'uuid'
import { Plo } from './Plo'
import { EditPloForm } from './EditPloForm';
import PloPeoContext from "./Context/PloPeoContext";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
uuidv4()

export const PloWrapper = () => {

    const {plos,deletePlo,editPlo,editDescriptionPlo,addPlo} = useContext(PloPeoContext);
    
  return (
    <div className='Wrapper' id='plo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
          </div>
          <div className='col-4 Heading2'>
            <h2 >Program Learning Outcomes (PLO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <PloForm addPlo={addPlo}/>
        <table className='table table-bordered text-center table-hover border-dark table-hover'>
          <thead>
            <tr>
              <th>PLO ID</th>
              <th>PLO Description</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {plos.map((plo, index) => (
              
              plo.isEditing ? (
                <EditPloForm editPlo={editDescriptionPlo} description={plo}/>
              ) : (
                <Plo description={plo} key={plo.id} index={index} deletePlo={deletePlo} editPlo={editPlo}/>
                )))
                
            }
          </tbody>
        </table>
        
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/peomapmission'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/plomappeo'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}
