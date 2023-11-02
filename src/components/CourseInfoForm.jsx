import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const CourseInfoForm = ({addMission}) => {
  const [courseCode, setCourseCode] = useState("")
  const [credit, setCredit] = useState("")
  const [title, setTitle] = useState("")
  const [prerequisites, setPrerequisites] = useState("")
  const [type, setType] = useState("")
  const [contactHours, setContactHours] = useState(10)
  const [totalLectures, setTotalLectures] = useState(10)
  const [classTests, setClassTests] = useState(3)
  const [finalExam, setFinalExam] = useState(1)
  const [faculty, setFaculty] = useState("")
  const [rationale, setRationale] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
}

  return (
    <div>
        <form action="submit" className='CourseInfoForm container-fluid' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>Course Code: </label>
              <input type="text" className='form-input form-control' value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>Credit: </label>
              <input type="text" className='form-input form-control' value={credit} onChange={(e) => setCredit(e.target.value)} required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>Title: </label>
              <input type="text" className='form-input form-control' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>Prerequisites: </label>
              <input type="text" className='form-input form-control' value={prerequisites} onChange={(e) => setPrerequisites(e.target.value)}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>Type: </label>
              <input type="text" className='form-input form-control' value={type} onChange={(e) => setType(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>Contact Hours: </label>
              <input type="number" className='form-input form-control' value={contactHours} onChange={(e) => setContactHours(e.target.value)} required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label'>Total Lectures: </label>
              <input type="number" className='form-input form-control' value={totalLectures} onChange={(e) => setTotalLectures(e.target.value)} required/>
            </div>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label'>No. of Class Test: </label>
              <input type="number" className='form-input form-control' value={classTests} onChange={(e) => setClassTests(e.target.value)} required/>
            </div>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label'>Final Examination: </label>
              <input type="number" className='form-input form-control' value={finalExam} onChange={(e) => setFinalExam(e.target.value)} required/>
            </div>
          </div>
          
          <div>
            <label htmlFor="" className='form-label'>Faculty: </label>
            <input type="text" className='form-input form-control' value={faculty} onChange={(e) => setFaculty(e.target.value)} required/>
          </div>
          <div>
            <label htmlfor="" className='form-label'>Rationale:</label>
            <textarea class="form-input form-control" rows="3" value={rationale} onChange={(e) => setRationale(e.target.value)} required></textarea>
          </div>
          <div className='form-group'>
            <button type='button' className='btn btn-success mb-5'>Save</button>
          </div>
          <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/addcourse'>
                <button type='button' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/courseobjective'>
                <button type='button' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
        </form>

        
    </div>
  )
}
