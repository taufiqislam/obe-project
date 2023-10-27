import React, {useState} from 'react'
import { MissionForm } from './MissionForm'
import {v4 as uuidv4} from 'uuid'
import { Mission } from './Mission'
import { EditMissionForm } from './EditMissionForm';
uuidv4()

export const MissionWrapper = () => {
    const [missions, setMissions] = useState([])

    const addMission = mission =>  {
        setMissions([...missions, {id: uuidv4(), description: mission, completed: false, isEditing: false}])
        console.log(missions)
    }
    const deleteMission = id => {
      setMissions(missions.filter(mission => mission.id !== id))

    }

    const editMission = id => {
      setMissions(missions.map(mission => mission.id === id ? {...mission, isEditing: !mission.isEditing} : mission))
    }

    const editDescription = (description, id) => {
      setMissions(missions.map(mission => mission.id === id ? {...mission,description, isEditing: !mission.isEditing} : mission))
    }
    
  return (
    <div className='Wrapper'>
        <h1 className='text-center pb-5'>Mission</h1>
        <MissionForm addMission={addMission}/>
        <table className='table table-bordered table-light text-center'>
          <thead>
            <tr>
              <th>Mission ID</th>
              <th>Mission Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission, index) => (
              
              mission.isEditing ? (
                <EditMissionForm editMission={editDescription} description={mission}/>
              ) : (
                <Mission description={mission} key={mission.id} index={index} deleteMission={deleteMission} editMission={editMission}/>
                )))
                
            }
          </tbody>
        </table>
        
        <button type='submit'>Next</button>
    </div>
  )
}
