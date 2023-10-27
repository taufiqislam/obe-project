import React from 'react'

export const CloMapPloTable = () => {
  return (
    <div>
        <h1 className='text-center'>CLO-PLO Correlation Matrix</h1>
        <table className='table table-bordered table-light text-center'>
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
        <button type='button' className='form-btn btn'>Save</button>
    </div>
  )
}
