import React from 'react'
import {Link} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div>
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
                  <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                      <span class="fs-5 d-none d-sm-inline">Menu</span>
                  </a>
                  <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                      <li class="nav-item">
                          <Link to='/' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-block d-sm-inline">Home</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/mission' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Mission</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/vision' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Vision</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/peo' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">PEO</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/plo' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">PLO</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/ilo' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">ILO</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/cloPloReasoning' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">CLO & PLO reasoning</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/courseinfo' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Course Info</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/peomapmission' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Mapping Of PEO and Mission</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/plomappeo' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Mapping Of PLO and PEO</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/clomapplo' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">CLO-PLO Correlation Matrix</span>
                          </Link>
                      </li>

                          <Link to='/addcourse' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Add Course</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/curri' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Curriculum</span>
                          </Link>
                      </li>
                      {/* <li>
                          <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                          <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                              <li class="w-100">
                                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                              </li>
                              <li>
                                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a href="#" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>

                          <Link to='/clo' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">CLO</span>
                          </Link>

                      </li>
                      <li class="nav-item">
                          <Link to='/bookreference' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Reference Books</span>
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link to='/courseobjective' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">Course Objective</span>
                          </Link>
                      </li>
                  </ul>
              </div>
    </div>
  )
}
