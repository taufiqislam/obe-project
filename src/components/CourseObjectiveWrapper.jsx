import React, {useState} from 'react'
import { CourseObjectiveForm } from './CourseObjectiveForm'
import {v4 as uuidv4} from 'uuid'
import { CourseObjective } from './CourseObjective'
import { EditCourseObjectiveForm } from './EditCourseObjectiveForm';
uuidv4()

export const CourseObjectiveWrapper = () => {

    const [courseObjectives, setCourseObjectives] = useState([])

    const addCourseObjective = courseObjective =>  {
        setCourseObjectives([...courseObjectives, {id: uuidv4(), description: courseObjective, completed: false, isEditing: false}])
        console.log(courseObjectives)
    }
    const deleteCourseObjective = id => {
      setCourseObjectives(courseObjectives.filter(courseObjective => courseObjective.id !== id))

    }

    const editCourseObjective = id => {
      setCourseObjectives(courseObjectives.map(courseObjective => courseObjective.id === id ? {...courseObjective, isEditing: !courseObjective.isEditing} : courseObjective))
    }

    const editDescriptionCourseObjective = (description, id) => {
      setCourseObjectives(courseObjectives.map(courseObjective => courseObjective.id === id ? {...courseObjective,description, isEditing: !courseObjective.isEditing} : courseObjective))
    }
    
  return (
    <div className='Wrapper'>
        <h1 className='text-center pb-5'>Course Objectives(CO)</h1>
        <CourseObjectiveForm addCourseObjective={addCourseObjective}/>
        <table className='table table-bordered table-light text-center'>
          <thead>
            <tr>
              <th>CO ID</th>
              <th>CO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courseObjectives.map((courseObjective, index) => (
              
              courseObjective.isEditing ? (
                <EditCourseObjectiveForm editCourseObjective={editDescriptionCourseObjective} description={courseObjective}/>
              ) : (
                <CourseObjective description={courseObjective} key={courseObjective.id} index={index} deleteCourseObjective={deleteCourseObjective} editCourseObjective={editCourseObjective}/>
                )))
                
            }
          </tbody>
        </table>
        
        <button type='submit'>Next</button>
    </div>
  )
}
