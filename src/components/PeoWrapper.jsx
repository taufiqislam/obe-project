import React, {useContext, useState} from 'react'
import { PeoForm } from './PeoForm'
import {v4 as uuidv4} from 'uuid'
import { Peo } from './Peo'
import { EditPeoForm } from './EditPeoForm';
import MissionPeoContext from "./Context/MissionPeoContext";
uuidv4()

export const PeoWrapper = () => {

    const {peos,addPeo,deletePeo,editPeo,editDescription} = useContext(MissionPeoContext);
    
  return (
    <div className='Wrapper'>
        <h1 className='text-center pb-5'>PEO</h1>
        <PeoForm addPeo={addPeo}/>
        <table className='table table-bordered table-light text-center'>
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
        
        <button type='submit'>Next</button>
    </div>
  )
}
