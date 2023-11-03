import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Plo = ({description, index, deletePlo, editPlo}) => {
  return (
    <>
        <tr>
          <td>PLO{index+1}</td>
          <td>{description.description}</td>
          <td>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editPlo(description.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deletePlo(description.id)}/>
          </td>
        </tr>
        
        
    </>
  )
}
