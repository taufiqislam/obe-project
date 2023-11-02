import React, {useContext, useState} from 'react'
import { CloForm } from './CloForm'
import {v4 as uuidv4} from 'uuid'
import { Clo } from './Clo'
import { EditCloForm } from './EditCloForm';
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
        <h1>CLO</h1>
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
        
        <button type='submit'>Next</button>
    </div>
  )
}
