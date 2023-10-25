import React, {useState} from 'react'

export const EditIloForm = ({editIlo, description}) => {
    const [value, setValue] = useState(description.description)

    const handleSubmit = (e) => {
        e.preventDefault();
        editIlo(value,description.id);
        setValue("")
    }

  return (
    <form className='IloForm' onSubmit={handleSubmit}>
        <input type="text" className='form-input' placeholder='Update Ilo' value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type='submit' className='form-btn'>Update description</button>
    </form>
  )
}
