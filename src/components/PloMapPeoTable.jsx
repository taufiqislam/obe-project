import React, {useContext} from 'react'
import MissionPeoContext from "./Context/MissionPeoContext";
import PloPeoContext from "./Context/PloPeoContext";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'

export const PloMapPeoTable = () => {

    const {peos} = useContext(MissionPeoContext);
    const {plos} = useContext(PloPeoContext);
    

  return (
    <div className='Wrapper' id='plomappeo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
          </div>
          <div className='col-4 Heading2'>
            <h2>Mapping of PLO and PEO</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        
        <table className='table table-bordered table-hover text-center border-dark align-middle'>
            <thead>
                <tr>
                    <th>PLOs</th>
                    <th>PLO Description</th>
                    {
                        peos.map((peo,index)=>(
                            <th>PEO{index+1}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
            {
                plos.map((plo,index)=>(
                    <tr>
                        <td>PLO{index+1}</td>
                        <td>{plo.description}</td>
                        {
                            peos.map((peo,index)=>(
                                <td><input type="number" className='form-control'/></td>
                            ))
                        }
                    </tr>
                ))
            }
                <tr>
                    <td colSpan={peos.length+2} className='text-center'>Level of Correlation: 3-High, 2-Medium, 1-Low</td>
                </tr>
            </tbody>
        </table>
        <button type='button' className='btn btn-success mb-5'>Save</button>
        
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/plo'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/addcourse'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}
