import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Ilo = ({description, index, deleteIlo, editIlo}) => {
  return (
    <div className='Ilo'>
        <p>{index+1}</p>
        <p>{description.description}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editIlo(description.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteIlo(description.id)}/>
        </div>
    </div>
  )
}
