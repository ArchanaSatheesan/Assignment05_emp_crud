import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {  useState } from "react";


const Home = () => {

  const navigate=useNavigate();
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');



const userAuthentication = ()=>{
  const userData=
  {
    "email":username,
    "password":password
  }
  console.log(userData)
  axios.post(`http://localhost:3000/api/home`,
  userData
  ).then((response)=>{

    console.log(response.data)

    if (response.data.status=="success") {

        let token=response.data.token
        let userId=response.data.data[0]._id
        // alert("valid user")
        // alert("userId => "+userId)
        // alert("token => "+token)

        sessionStorage.setItem("userToken",token)
        sessionStorage.setItem("userId",userId)

        navigate("/Read")



        
    } else {
        alert("Invalid user")
 
    }
   
   })
  }





  return (
    <>
    <Navbar/>


    <div>
      <h5 class="text-center">Login</h5>
      <div className='container'>
      <div class="form-floating mb-6">
  <input type="text"   onChange={(e)=>setUsername(e.target.value)} class="form-control" id="floatingInput" placeholder="name@example.com" required/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="text"  onChange={(e)=>setUsername(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" required/>
  <label for="floatingPassword">Password</label>
</div>

<div className='btn'>
<button type="button" onClick={userAuthentication} class="btn btn-warning">Login</button>
</div>
    </div>
    </div>
    
    </>
  )
}

export default Home