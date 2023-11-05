import React, {useContext, useState} from 'react'
import { CloForm } from './CloForm'
import {v4 as uuidv4} from 'uuid'
import { Clo } from './Clo'
import { EditCloForm } from './EditCloForm';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
uuidv4()

export const CloWrapper = () => {

    const [clos, setClos] = useState([])
    const addClo = (clo , level)=>  {
        setClos([...clos, {id: uuidv4(), description: clo, cognition: level, completed: false, isEditing: false}])
    }
    const deleteClo = id => {
        setClos(clos.filter(clo => clo.id !== id))
    }
    const editClo = id => {
        setClos(clos.map(clo => clo.id === id ? {...clo, isEditing: !clo.isEditing} : clo))
    }
    const editDescriptionClo = (description, cognition , id) => {
        setClos(clos.map(clo => clo.id === id ? {...clo,description,cognition, isEditing: !clo.isEditing} : clo))
    }
    // const {clos,addClo,deleteClo,editClo,editDescriptionClo} = useContext(MissionCloContext);
    
  return (
    <div className='Wrapper' id='clo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
            <p>Course: CSE-356</p>
          </div>
          <div className='col-4 Heading2'>
            <h2 >Course Learning Outcomes (CLO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <CloForm addClo={addClo}/>
        <table className='table table-bordered text-center table-hover border-dark'>
          <thead>
            <tr>
              <th>CLO ID</th>
              <th>CLO Description</th>
              <th>Knowledge Level</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clos.map((clo, index) => (
              
              clo.isEditing ? (
                <EditCloForm editClo={editDescriptionClo} description={clo}/>
              ) : (
                <Clo description={clo} key={clo.id} index={index} deleteClo={deleteClo} editClo={editClo}/>
                ))) 
                
            }
          </tbody>
        </table>
        
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/courseobjective'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/clomapplo'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}
