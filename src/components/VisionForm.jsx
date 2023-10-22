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
       <input type="text" className='vision-input' placeholder='Enter Vision' value={value} onChange={(e) => setValue(e.target.value)} required/>
       <button type='submit' className='vision-btn'>Add Vision</button>
    </form>
  )
}
