import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Clo = ({description, index, deleteClo, editClo}) => {
  return (
    <>
        <tr>
          <td>CLO{index+1}</td>
          <td>{description.description}</td>
          <td>{description.cognition}</td>
          <td>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editClo(description.id)}/>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteClo(description.id)}/>
          </td>
        </tr>
        
        
    </>
  )
}
