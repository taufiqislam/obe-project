import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Peo = ({description, index, deletePeo, editPeo}) => {
  return (
    <div className='Peo'>
        <p>{index+1}</p>
        <p>{description.description}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editPeo(description.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deletePeo(description.id)}/>
        </div>
    </div>
  )
}
