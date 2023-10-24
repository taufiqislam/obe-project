import React, {useState} from 'react'

export const PeoForm = ({addPeo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addPeo(value);
        setValue("")
    }
  return (
    <form className='PeoForm' onSubmit={handleSubmit}>
       <label htmlFor=""></label>
       <input type="text" className='form-input' placeholder='Enter Peo' value={value} onChange={(e) => setValue(e.target.value)} required/>
       <button type='submit' className='form-btn'>Add Peo</button>
    </form>
  )
}
