import React, {useContext} from 'react'
import MissionPeoContext from "./Context/MissionPeoContext";
import PloPeoContext from "./Context/PloPeoContext";

export const PloMapPeoTable = () => {

    const {peos} = useContext(MissionPeoContext);
    const {plos} = useContext(PloPeoContext);


  return (
    <div className='Wrapper' id='plomappeo'>
        <h1>Mapping of PLO and PEO</h1>
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
                    <td colSpan={5} className='text-center'>Level of Correlation: 3-High, 2-Medium, 1-Low</td>
                </tr>
            </tbody>
        </table>
        <button type='button' className='form-btn btn'>Save</button>
    </div>
  )
}
