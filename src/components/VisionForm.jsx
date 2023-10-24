import React, {useState} from 'react'

export const VisionForm = ({addVision}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addVision(value);
        setValue("")
    }
  return (
    <form className='VisionForm' onSubmit={handleSubmit}>
       <label htmlFor=""></label>
       <input type="text" className='form-input' placeholder='Enter Vision' value={value} onChange={(e) => setValue(e.target.value)} required/>
       <button type='submit' className='form-btn'>Add Vision</button>
    </form>
  )
}
