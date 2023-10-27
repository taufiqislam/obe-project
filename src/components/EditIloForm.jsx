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
      <div className='form-group'>
        <input type="text" className='form-input form-control' placeholder='Update Ilo' value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type='submit' className='form-btn btn'>Update</button>
      </div>
        
    </form>
  )
}
