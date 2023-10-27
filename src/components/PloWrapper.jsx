import React, {useState} from 'react'
import { PloForm } from './PloForm'
import {v4 as uuidv4} from 'uuid'
import { Plo } from './Plo'
import { EditPloForm } from './EditPloForm';
uuidv4()

export const PloWrapper = () => {
    const [plos, setPlos] = useState([])

    const addPlo = plo =>  {
        setPlos([...plos, {id: uuidv4(), description: plo, completed: false, isEditing: false}])
        console.log(plos)
    }
    const deletePlo = id => {
      setPlos(plos.filter(plo => plo.id !== id))

    }

    const editPlo = id => {
      setPlos(plos.map(plo => plo.id === id ? {...plo, isEditing: !plo.isEditing} : plo))
    }

    const editDescription = (description, id) => {
      setPlos(plos.map(plo => plo.id === id ? {...plo,description, isEditing: !plo.isEditing} : plo))
    }
    
  return (
    <div className='Wrapper'>
        <h1 className='text-center pb-5'>Plo</h1>
        <PloForm addPlo={addPlo}/>
        <table className='table table-bordered table-light text-center'>
          <thead>
            <tr>
              <th>PLO ID</th>
              <th>PLO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {plos.map((plo, index) => (
              
              plo.isEditing ? (
                <EditPloForm editPlo={editDescription} description={plo}/>
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
