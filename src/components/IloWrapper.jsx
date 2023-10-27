import React, {useState} from 'react'
import { IloForm } from './IloForm'
import {v4 as uuidv4} from 'uuid'
import { Ilo } from './Ilo'
import { EditIloForm } from './EditIloForm';
uuidv4()

export const IloWrapper = () => {
    const [ilos, setIlos] = useState([])

    const addIlo = ilo =>  {
        setIlos([...ilos, {id: uuidv4(), description: ilo, completed: false, isEditing: false}])
        console.log(ilos)
    }
    const deleteIlo = id => {
      setIlos(ilos.filter(ilo => ilo.id !== id))

    }

    const editIlo = id => {
      setIlos(ilos.map(Ilo => Ilo.id === id ? {...Ilo, isEditing: !Ilo.isEditing} : Ilo))
    }

    const editDescription = (description, id) => {
      setIlos(ilos.map(ilo => ilo.id === id ? {...ilo,description, isEditing: !ilo.isEditing} : ilo))
    }
    
  return (
    <div>
        
        <IloForm addIlo={addIlo}/>
        {ilos.map((ilo, index) => (
            
          ilo.isEditing ? (
            <EditIloForm editIlo={editDescription} description={ilo}/>
           ) : (
            <Ilo description={ilo} key={ilo.id} index={index} deleteIlo={deleteIlo} editIlo={editIlo}/>
            )))
            
        }
        <button type='submit'>Next</button>
    </div>
  )
}
