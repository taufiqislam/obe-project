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
                      <li class="nav-item">
                          <Link to='/clo' class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="d-none d-sm-inline">CLO</span>
                          </Link>
                      </li>
                  </ul>
              </div>
    </div>
  )
}
