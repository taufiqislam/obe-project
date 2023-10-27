import React from 'react'

export const PeoMapMissionTable = () => {
  return (
    <div className='Wrapper'>
        <h1 className='text-center pb-5'>Mapping of PEO and Mission</h1>
        <table className='table table-bordered table-light text-center'>
            <thead>
                <tr>
                    <th>PEOs</th>
                    <th>PEO Description</th>
                    <th>M1</th>
                    <th>M2</th>
                    <th>M3</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>PEO1</td>
                    <td>PEO Description</td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                </tr>
                <tr>
                    <td>PEO2</td>
                    <td>PEO Description</td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                </tr>
                <tr>
                    <td>PEO3</td>
                    <td>PEO Description</td>
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
