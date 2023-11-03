import React, {useContext} from 'react'
import { MissionForm } from './MissionForm'
import {v4 as uuidv4} from 'uuid'
import { Mission } from './Mission'
import { EditMissionForm } from './EditMissionForm';
import MissionPeoContext from "./Context/MissionPeoContext";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
uuidv4()

export const MissionWrapper = () => {

    const {missions,addMission,deleteMission,editMission,editDescriptionMission} = useContext(MissionPeoContext);
    
  return (
    <div className='Wrapper' id='mission'>
        <div className='row'>
          <div className='col-4 Heading1'>

          </div>
          <div className='col-4 Heading2'>
            <h2 >Mission</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        
        <MissionForm addMission={addMission}/>
        <table className='table table-bordered text-center table-hover border-dark'>
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
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/vision'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
        
        
    </div>
  )
}
