import React, {useContext, useState} from 'react'
import { PloForm } from './PloForm'
import {v4 as uuidv4} from 'uuid'
import { Plo } from './Plo'
import { EditPloForm } from './EditPloForm';
import PloPeoContext from "./Context/PloPeoContext";
uuidv4()

export const PloWrapper = () => {

    const {plos,deletePlo,editPlo,editDescriptionPlo,addPlo} = useContext(PloPeoContext);
    
  return (
    <div className='Wrapper' id='plo'>
        <h1>Plo</h1>
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
        
        <button type='submit'>Next</button>
    </div>
  )
}
