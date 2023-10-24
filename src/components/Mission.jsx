import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Mission = ({description, index, deleteMission, editMission}) => {
  return (
    <div className='Mission'>
        <tr>{index+1}</tr>
        <tr>{description.description}</tr>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editMission(description.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteMission(description.id)}/>
        </div>
    </div>
  )
}
