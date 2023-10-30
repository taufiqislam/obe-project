import React, {useContext, useEffect} from 'react'
import MissionPeoContext from "./Context/MissionPeoContext";

export const PeoMapMissionTable = () => {

const {peos,missions} = useContext(MissionPeoContext);

useEffect(()=>{
    console.log(missions.length);
})




  return (
    <div className='Wrapper'>
        <h1 className='text-center pb-5'>Mapping of PEO and Mission</h1>
        <table className='table table-bordered table-light text-center align-middle'>
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
        <button type='button' className='form-btn btn'>Save</button>
    </div>
  )
}
