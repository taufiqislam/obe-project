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
    <div className='PloWrapper'>
        <h1>Plo</h1>
        <PloForm addPlo={addPlo}/>
        {plos.map((plo, index) => (
            
          plo.isEditing ? (
            <EditPloForm editPlo={editDescription} description={plo}/>
           ) : (
            <Plo description={plo} key={plo.id} index={index} deletePlo={deletePlo} editPlo={editPlo}/>
            )))
            
        }
        <button type='submit'>Next</button>
    </div>
  )
}
