import React from 'react'
import { useState } from 'react'
const Bookreference = () => {
    const [inputarr,
        setInputarr] = useState([])

    const [inputdata,
        SetInputdata] = useState({aa: "", bb: "",cc: "",dd:"",ee:""})

    function changehandle(e) {
   
        
           SetInputdata({...inputdata,[e.target.name]: e.target.value})
    

    }

    let {aa, bb,cc,dd,ee} = inputdata;
    function changhandle() {

        if(aa==="" && bb===""&&cc===""&&dd===""&&ee===""){
            alert("Enter INPUT fields")
          }else{
        setInputarr([
            ...inputarr, {
                aa,
                bb,
                cc,
                dd,
                ee
            }
        ])
    }
        console.log(inputdata, "input data what we Enter")
        SetInputdata({aa: "", bb: "",cc: "",dd:"",ee:""})

    }
  return (
    <div className="App">
    <h1>Book Reference</h1>
    <input
        width="50%"
        type="text"
        autoComplete='off'
        name='aa'
        value={inputdata.aa}
        onChange={changehandle}
        placeholder="Enter Book Name"/>
    <input
        type="text"
        autoComplete='off'
        name='bb'
        value={inputdata.bb}
        onChange={changehandle}
        placeholder="Enter Book Author"/>
    <input
        width="50%"
        type="text"
        autoComplete='off'
        name='cc'
        value={inputdata.cc}
        onChange={changehandle}
        placeholder="Enter Book Publisher"/> 
     <input
        width="50%"
        type="text"
        autoComplete='off'
        name='dd'
        value={inputdata.dd}
        onChange={changehandle}
        placeholder="Enter Publish Year"/>    
         <input
        width="50%"
        type="text"
        autoComplete='off'
        name='ee'
        value={inputdata.ee}
        onChange={changehandle}
        placeholder="Enter Published Edition"/>         

    <button onClick={changhandle}>Add It
    </button><br/>

    <table className='table table-bordered table-light text-center'>
        <tbody>
            <tr>

                <th>  Book </th>
                <th> Author </th>
                <th> Publisher </th>
                <th> Year </th>
                <th> Edition </th>

            </tr>
            {inputarr.length < 1 ?
                <tr>
                    <td colSpan={10}>NO data Enter yet !</td>
                </tr>:
            inputarr.map((info, ind) => {
                return (
                    <tr key={ind}>

                        <td>{info.aa}</td>
                        <td>{info.bb}</td>
                        <td>{info.cc}</td>
                        <td>{info.dd}</td>
                        <td>{info.ee}</td>
                    </tr>
                )
            })
}

        </tbody>
    </table>
</div>
);  
  
}

export default Bookreference
