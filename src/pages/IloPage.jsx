import React from 'react'
import { IloWrapper } from '../components/IloWrapper'
import { Sidebar } from '../components/Sidebar'

export const IloPage = () => {
  return (
    <div>
        <Sidebar/>
        <h1>Ilo</h1>
        <h1>Knowledge</h1>
        <IloWrapper/>
        <h1>Skills</h1>
        <IloWrapper/>
        <h1>Attitude</h1>
        <IloWrapper/>
    </div>
  )
}
