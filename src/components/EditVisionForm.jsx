import React, {useState} from 'react'

export const EditVisionForm = ({editVision, description}) => {
    const [value, setValue] = useState(description.description)

    const handleSubmit = (e) => {
        e.preventDefault();
        editVision(value,description.id);
        setValue("")
    }

  return (
    <form className='VisionForm' onSubmit={handleSubmit}>
        <input type="text" className='form-input' placeholder='Update Vision' value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type='submit' className='form-btn'>Update description</button>
    </form>
  )
}
