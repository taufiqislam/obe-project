import React, {useState} from 'react'

export const IloForm = ({addIlo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addIlo(value);
        setValue("")
    }
  return (
    <form className='IloForm' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="">ILO:</label>
        <input type="text" className='form-input form-control' placeholder='Enter Ilo' value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type='submit' className='form-btn btn'>Add Ilo</button>
      </div>
       
    </form>
  )
}
