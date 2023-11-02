import React, {useState} from 'react'
import { SkillForm } from './SkillForm'
import {v4 as uuidv4} from 'uuid'
import { Skill } from './Skill'
import { EditSkillForm } from './EditSkillForm';
uuidv4()

export const SkillWrapper = () => {

    const [skills, setSkills] = useState([])

    const addSkill = skill =>  {
        setSkills([...skills, {id: uuidv4(), description: skill, completed: false, isEditing: false}])
        console.log(skills)
    }
    const deleteSkill = id => {
      setSkills(skills.filter(skill => skill.id !== id))

    }

    const editSkill = id => {
      setSkills(skills.map(skill => skill.id === id ? {...skill, isEditing: !skill.isEditing} : skill))
    }

    const editDescriptionSkill = (description, id) => {
      setSkills(skills.map(skill => skill.id === id ? {...skill,description, isEditing: !skill.isEditing} : skill))
    }
    
  return (
    <div className='Wrapper'>
        <SkillForm addSkill={addSkill}/>
        <table className='table table-bordered text-center table-hover border-dark'>
          <thead>
            <tr>
              <th>ILO ID</th>
              <th>ILO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              
              skill.isEditing ? (
                <EditSkillForm editSkill={editDescriptionSkill} description={skill}/>
              ) : (
                <Skill description={skill} key={skill.id} index={index} deleteSkill={deleteSkill} editSkill={editSkill}/>
                )))
                
            }
          </tbody>
        </table>
    </div>
  )
}
