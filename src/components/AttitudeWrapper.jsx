import React, {useState} from 'react'
import { AttitudeForm } from './AttitudeForm'
import {v4 as uuidv4} from 'uuid'
import { Attitude } from './Attitude'
import { EditAttitudeForm } from './EditAttitudeForm';
uuidv4()

export const AttitudeWrapper = () => {

    const [attitudes, setAttitudes] = useState([])

    const addAttitude = attitude =>  {
        setAttitudes([...attitudes, {id: uuidv4(), description: attitude, completed: false, isEditing: false}])
        console.log(attitudes)
    }
    const deleteAttitude = id => {
      setAttitudes(attitudes.filter(attitude => attitude.id !== id))

    }

    const editAttitude = id => {
      setAttitudes(attitudes.map(attitude => attitude.id === id ? {...attitude, isEditing: !attitude.isEditing} : attitude))
    }

    const editDescriptionAttitude = (description, id) => {
      setAttitudes(attitudes.map(attitude => attitude.id === id ? {...attitude,description, isEditing: !attitude.isEditing} : attitude))
    }
    
  return (
    <div className='Wrapper'>
        <h1 className='text-center pb-5'>Attitude</h1>
        <AttitudeForm addAttitude={addAttitude}/>
        <table className='table table-bordered table-light text-center'>
          <thead>
            <tr>
              <th>ILO ID</th>
              <th>ILO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {attitudes.map((attitude, index) => (
              
              attitude.isEditing ? (
                <EditAttitudeForm editAttitude={editDescriptionAttitude} description={attitude}/>
              ) : (
                <Attitude description={attitude} key={attitude.id} index={index} deleteAttitude={deleteAttitude} editAttitude={editAttitude}/>
                )))
                
            }
          </tbody>
        </table>
        
        <button type='submit'>Next</button>
    </div>
  )
}
