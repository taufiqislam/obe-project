import React, {useState} from 'react'

export const MissionForm = ({addMission}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addMission(value);
        setValue("")
    }
  return (
    <form className='MissionForm' onSubmit={handleSubmit}>
       <label htmlFor=""></label>
       <input type="text" className='mission-input' placeholder='Enter Mission' value={value} onChange={(e) => setValue(e.target.value)} required/>
       <button type='submit' className='mission-btn'>Add Mission</button>
    </form>
  )
}
