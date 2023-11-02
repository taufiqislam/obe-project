import React from 'react'
import { KnowledgeWrapper } from './KnowldedgeWrapper'
import { SkillWrapper } from './SkillWrapper'
import { AttitudeWrapper } from './AttitudeWrapper'

export const IloWrapper = () => {
  return (
    <div className='Wrapper' id='ilo'>
        <KnowledgeWrapper/>
        <SkillWrapper/>
        <AttitudeWrapper/>
    </div>
  )
}
