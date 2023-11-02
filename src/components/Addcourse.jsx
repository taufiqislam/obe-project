import React, { useState } from 'react'

export default function Addcourse() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({cc:"",cn:""})
    let [index,setIndex]=useState()
    let [bolin,setBolin]=useState(false)
    let {cc,cn}=inputdata;




    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

 
    function addinputdata(){

        if(cc==="" && cn===""){
            alert("Enter Name and Roll no ")
        }
        else{
        setArray([...array,{cc,cn}])
        setInputdata({cc:"",cn:""})
    }
    }

function deletedata(i){
    console.log(i,"this index row want to be delete")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

}

function updatedata(i){

    let {cc,cn}=array[i]
    setInputdata({cc,cn})
    setBolin(true)
    setIndex(i)

}

function updateinfo(){
    let total=[...array]
    total.splice(index,1,{cc,cn})
    setArray(total)
     setBolin(false)
     setInputdata({cc:"",cn:""})
}
  return (
    <div>
          
            <h1> Add New Courses</h1>
            <input type="text" value={inputdata.cc || ""} name='cc' autoComplete='off' placeholder='Enter Course Code' onChange={data}  />
            <input type="text" value={inputdata.cn || ""} name="cn" placeholder='Enter Course Name' onChange={data} />
            <button onClick={!bolin?addinputdata:updateinfo}>{!bolin?'Add Course':'Update data'}</button>

            <br />

            <table className='table table-bordered table-light text-center hover' >
                <tbody>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                {

array && array.map(
(item,i)=>{
    return(
        <tr key={i}>
            <td>{item.cc}</td>
            <td>{item.cn}</td>
            <td><button onClick={()=>updatedata(i)}>Update</button></td>
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