import React from 'react'
import {Link} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <>
              <div className="d-flex flex-column align-items-center align-items-sm-start ">
                  <div className='text-center Sidetext'>
                    <h4>Anup Majumder</h4>
                    <p>Associate Professor</p>
                    <p>Department Of Computer Science And Engineering</p>
                  </div>
                  
                  <ul className="nav nav-pills flex-column  align-items-center align-items-sm-start" id="menu">
                      <li className="nav-item w-100 text-center">
                          <Link to='/' className="nav-link align-middle px-0">
                            <span className="d-block d-sm-inline">Home</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/mission' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Mission</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/vision' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Vision</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/peo' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Program Educational Objectives (PEO)</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/peomapmission' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Mapping Of PEO and Mission</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/plo' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Program Learning Outcomes (PLO)</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/plomappeo' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Mapping Of PLO and PEO</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/courseinfo' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Course Information</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/courseobjective' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Course Objectives</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/clo' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Course Learning Outcomes (CLO)</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/clomapplo' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">CLO-PLO Correlation Matrix</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/cloPloReasoning' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">CLO & PLO reasoning</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/ilo' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Intended Learning Outcomes (ILO)</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/courseassessment' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Course Assessment</span>
                          </Link>
                      </li>
                      <li className="nav-item w-100 text-center">
                          <Link to='/bookreference' className="nav-link align-middle px-0">
                              <span className="d-none d-sm-inline">Reference Books</span>
                          </Link>
                      </li>
                      
                      
                  </ul>
              </div>
    </>
  )
}
