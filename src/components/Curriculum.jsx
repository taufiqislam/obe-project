import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

export default function Curriculum() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({starting:"",ending:""})
    let [index]=useState()
    let [bolin,setBolin]=useState(false)
    let {starting,ending}=inputdata;




    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

 
    function addinputdata(){
        
        if(starting==="" && ending===""){
            alert("Enter Name and Roll no ")
        }
        else{
        setArray([...array,{starting,ending}])
        setInputdata({starting:"",ending:""})
    }
    }



function deletedata(i){
    console.log(i,"this index row want to be delete")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

}

function updateinfo(){
    let total=[...array]
    total.splice(index,1,{starting,ending})
    setArray(total)
     setBolin(false)
     setInputdata({starting:"",ending:""})
}
  return (
    <div>
            <h1><label for="dropdown">Starting Session:</label></h1>
    <Form.Select id="dropdown"  value={inputdata.starting || ""} name="starting" autoComplete='off' placeholder='Enter Name' onChange={data}>
      <option>Open this select menu</option>
      <option value="2018-2019">2018-2019</option>
      <option value="2019-2020">2019-2020</option>
      <option value="2020-2021">2020-2021</option>
      <option value="2021-2022">2021-2022</option>
      </Form.Select>
            
      <h1><label for="dropdown">Ending Session:</label></h1>
    <Form.Select id="dropdown" value={inputdata.ending || ""} name="ending" autoComplete='off' placeholder='Enter Name' onChange={data}>
    <option>Open this select menu</option>
      <option value="2018-2019">2018-2019</option>
      <option value="2019-2020">2019-2020</option>
      <option value="2020-2021">2020-2021</option>
      <option value="2021-2022">2021-2022</option>
      </Form.Select>
            <button onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add data`:`Update data`}</button>

            <br />

            <table className='hover table table-bordered table-light text-center'  border="1" >
                <tbody>
                    <tr>
                        <th>Starting Session</th>
                        <th>Ending Session</th>
                        <th>Delete</th>
                    </tr>
                {

array && array.map(
(item,i)=>{
    return(
        <tr key={i}>
            <td>{item.starting}</td>
            <td>{item.ending}</td>
            <td><button onClick={()=>deletedata(i)}>Delete</button></td>
        </tr>
    )
}
)
   }

                </tbody>
            </table>

    </div>
  )
}
