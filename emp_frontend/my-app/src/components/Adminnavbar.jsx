import React from 'react'
import {Link} from 'react-router-dom'

const Adminnavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning navbar-light">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse row col-lg-12">
      <ul className="navbar-nav">
      <li className="nav-item col-lg-3 ">
      <Link style={{textDecoration:'inherit',color:'white'}}><h5>ADMIN DASHBOARD</h5></Link>
        </li> 
        <li className="nav-item col-lg-3">
          <Link style={{textDecoration:'inherit',color:'white'}} to='/' >Home</Link>
        </li> 
        <li className="nav-item col-lg-3">
          <Link style={{textDecoration:'inherit',color:'white'}} to='/employeeform' >Add Employee</Link>
        </li> 
        <li className="nav-item col-lg-3">
          <Link style={{textDecoration:'inherit',color:'white'}} to='/employeelist'>Employee List</Link>
        </li> 
       
       
        
      </ul>
    </div>


  </div>

  
</nav>

    </div>
  )
}

export default Adminnavbar