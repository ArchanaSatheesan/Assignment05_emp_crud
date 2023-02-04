import React from 'react'
import Navbar from './Navbar'
import  axios from "axios";
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Employeeform = () => {

  const navigate=useNavigate();

    const [name,setName]=useState("");
    const [location,setLocation]=useState("");
    const [position,setPosition]=useState("");
    const [salary,setSalary]=useState("");

    const sendDataToAPI=()=>{

      // e.preventDefault();
axios.post("http://localhost:3000/api/employeelist",
{name, location, position, salary}
).then(()=>{
  navigate("/Read");
})
    }


  return (
    <>
    <Navbar/>


    <div>
      <h5 class="text-center">Employee Information</h5>

    <div className="input-group">
      <span className="input-group-text">Employee name</span>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} aria-label="Full name" class="form-control" placeholder="First Name" required/>
      
      
      
    </div>

    <div className="input-group">
      <span className="input-group-text">Employee Designation</span>
      <input name="position" value={position} onChange={(e)=>setPosition(e.target.value)} aria-label="First name" class="form-control" required/>
      
    </div>

    <div className="input-group">
      <span className="input-group-text">Employee Location</span>
      <input name="location" value={location} onChange={(e)=>setLocation(e.target.value)} aria-label="First name" class="form-control" required/>
     
    </div>


    <div className="input-group">
      <span className="input-group-text">Employee Salary</span>
      <input name="salary" value={salary} onChange={(e)=>setSalary(e.target.value)} aria-label="First name" class="form-control" required />
      
    </div>

    <div className="d-grid gap-2 d-md-block">
  
        <button type="button" onClick={sendDataToAPI} className="btn btn-warning float-end">Submit</button>

    </div>



    

    </div>
    
    </>
  )
}

export default Employeeform