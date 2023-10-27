import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Peo = ({description, index, deletePeo, editPeo}) => {
  return (
    <>
        <tr>
          <td>{index+1}</td>
          <td>{description.description}</td>
          <td>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editPeo(description.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deletePeo(description.id)}/>
          </td>
        </tr>
        
        
    </>
  )
}
