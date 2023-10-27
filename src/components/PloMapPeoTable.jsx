import React from 'react'

export const PloMapPeoTable = () => {
  return (
    <div className='Wrapper'>
        <h1 className='text-center pb-5'>Mapping of PLO and PEO</h1>
        <table className='table table-bordered table-light text-center'>
            <thead>
                <tr>
                    <th>PLOs</th>
                    <th>PLO Description</th>
                    <th>PEO1</th>
                    <th>PEO2</th>
                    <th>PEO3</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>PLO1</td>
                    <td>PLO Description</td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                </tr>
                <tr>
                    <td>PLO2</td>
                    <td>PLO Description</td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                    <td><input type="number" className='form-control'/></td>
                </tr>
                <tr>
                    <td>PLO3</td>
                    <td>PLO Description</td>
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
