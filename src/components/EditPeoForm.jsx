import React, {useState} from 'react'

export const EditPeoForm = ({editPeo, description}) => {
    const [value, setValue] = useState(description.description)

    const handleSubmit = (e) => {
        e.preventDefault();
        editPeo(value,description.id);
        setValue("")
    }

  return (
    <form className='PeoForm' onSubmit={handleSubmit}>
        <input type="text" className='form-input' placeholder='Update Peo' value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type='submit' className='form-btn'>Update description</button>
    </form>
  )
}
