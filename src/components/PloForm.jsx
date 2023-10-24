import React, {useState} from 'react'

export const PloForm = ({addPlo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlo(value);
        setValue("")
    }
  return (
    <form className='PloForm' onSubmit={handleSubmit}>
       <label htmlFor=""></label>
       <input type="text" className='form-input' placeholder='Enter Plo' value={value} onChange={(e) => setValue(e.target.value)} required/>
       <button type='submit' className='form-btn'>Add Plo</button>
    </form>
  )
}
