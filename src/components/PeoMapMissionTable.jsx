import React, {useContext, useEffect} from 'react'
import MissionPeoContext from "./Context/MissionPeoContext";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'

export const PeoMapMissionTable = () => {

const {peos,missions} = useContext(MissionPeoContext);

useEffect(()=>{
    console.log(missions.length);
})




  return (
    <div className='Wrapper' id='peomapmission'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
          </div>
          <div className='col-4 Heading2'>
            <h2>Mapping of PEO and Mission</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        
        <table className='table table-bordered table-hover border-dark text-center align-middle'>
            <thead>
                <tr>
                    <th>PEOs</th>
                    <th>PEO Description</th>
                    {
                        missions.map((mission,index)=>(
                            <th>M{index+1}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>


            {
                peos.map((peo,index)=>(
                    <tr>
                        <td>PEO{index+1}</td>
                        <td>{peo.description}</td>
                        {
                            missions.map((mission,value)=>(
                                <td><input type="number" className='form-control'/></td>
                            ))
                        }
                    </tr>
                ))
            }
                <tr>
                    <td colSpan={5} className='text-center'>Level of Correlation: 3-High, 2-Medium, 1-Low</td>
                </tr>
            </tbody>
        </table>
        <button type='button' className='btn btn-success mb-5'>Save</button>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/peo'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/plo'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}
