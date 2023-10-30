import React, {useContext} from 'react'
import { MissionForm } from './MissionForm'
import {v4 as uuidv4} from 'uuid'
import { Mission } from './Mission'
import { EditMissionForm } from './EditMissionForm';
import MissionPeoContext from "./Context/MissionPeoContext";
uuidv4()

export const MissionWrapper = () => {

    const {missions,addMission,deleteMission,editMission,editDescriptionMission} = useContext(MissionPeoContext);
    
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
                <EditMissionForm editMission={editDescriptionMission} description={mission}/>
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
