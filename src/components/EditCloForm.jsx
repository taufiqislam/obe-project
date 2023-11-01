import React, {useState} from 'react'

export const EditCloForm = ({editClo, description}) => {
    const [value, setValue] = useState(description.description)
    const [level, setLevel] = useState(description.cognition)

    const handleSubmit = (e) => {
        e.preventDefault();
        editClo(value,level,description.id);
        setValue("")
    }

  return (
    <>
        <tr>
          <td colSpan={4}>
          <form className='CloForm' onSubmit={handleSubmit}>
            <div>
              <input type="text" className='form-input form-control' placeholder='Update CLO Description' value={value} onChange={(e) => setValue(e.target.value)} required/>
              <input type="text" className='form-input form-control' placeholder='Update Knowledge Level' value={level} onChange={(e) => setLevel(e.target.value)} required/>
              <button type='submit' className='form-btn btn'>Update</button>
            </div>
          </form>
          </td>
        </tr>
        
    </>
    
  )
}
