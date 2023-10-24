import React, {useState} from 'react'

export const EditPloForm = ({editPlo, description}) => {
    const [value, setValue] = useState(description.description)

    const handleSubmit = (e) => {
        e.preventDefault();
        editPlo(value,description.id);
        setValue("")
    }

  return (
    <form className='PloForm' onSubmit={handleSubmit}>
        <input type="text" className='form-input' placeholder='Update Plo' value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type='submit' className='form-btn'>Update description</button>
    </form>
  )
}
