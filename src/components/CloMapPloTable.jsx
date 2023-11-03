import React from 'react'
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'

export const CloMapPloTable = () => {
  return (
    <div className='Wrapper' id='clomapplo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
            <p>Course: CSE-356</p>
          </div>
          <div className='col-4 Heading2'>
            <h2>CLO-PLO Correlation Matrix</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        
        <table className='table table-bordered text-center align-middle table-hover border-dark'>
            <thead>
                <tr>
                    <th colSpan={2}>1st Year 1st Semester</th>
                    <th>Course Code: CSE 155</th>
                    <th colSpan={2}>Course Title: Data Structures</th>
                </tr>
                <tr>
                    <th>CLOs</th>
                    <th>CLO Description</th>
                    <th>PLO1</th>
                    <th>PLO2</th>
                    <th>PLO3</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>CLO1</td>
                    <td>CLO Description</td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                </tr>
                <tr>
                    <td>CLO2</td>
                    <td>CLO Description</td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                </tr>
                <tr>
                    <td>CLO3</td>
                    <td>CLO Description</td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                </tr>
                <tr>
                    <td colSpan={5} className='text-center'>Level of Correlation: 3-High, 2-Medium, 1-Low</td>
                </tr>
            </tbody>
        </table>
        <button type='button' className='btn btn-success mb-5'>Save</button>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/clo'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/cloploreasoning'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}
