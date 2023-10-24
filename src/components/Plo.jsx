import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Plo = ({description, index, deletePlo, editPlo}) => {
  return (
    <div className='Plo'>
        <p>{index+1}</p>
        <p>{description.description}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editPlo(description.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deletePlo(description.id)}/>
        </div>
    </div>
  )
}
