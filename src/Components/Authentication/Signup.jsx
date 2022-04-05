import React, { useState } from 'react'
import "./Signup.css"
import { Navbar } from '..'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext/Auth/AuthContext"

function Signup() {
  const [newUser, setNewUser] = useState({email:"",firstName:"", lastName:"",password:"",confirmPassword:""})
  const {signupHandler} = useAuth()
  const navigate = useNavigate()
  return (
      <>
      <Navbar />
    <div>
        <form onSubmit={(e)=>{
          e.preventDefault()    
          signupHandler(navigate, newUser.email,newUser.firstName, newUser.lastName, newUser.password, newUser.confirmPassword)
        }}
        className="signup-main-container" >
        <div className="signup-container">
            <h2 className="signup-heading">Signup</h2>
            <label className="email-add-txt">Email address</label>
            <input onChange={(e)=>setNewUser({...newUser,email:e.target.value})} className="email-input input" type="email" placeholder="abc@gmail.com"/>
            <label className="email-add">First name</label>
            <input onChange={(e)=>setNewUser({...newUser, firstName:e.target.value})} className="email-input input" type="text" placeholder="Enter First Name" />
            <label className="email-add">Last name</label>
            <input onChange={(e)=>setNewUser({...newUser, lastName:e.target.value})}className="email-input input" type="text" placeholder="Enter Last Name" />
            <label className="password">Password</label>
            <input onChange={(e)=>setNewUser({...newUser, password:e.target.value})}className="email-input input" type="password" placeholder="Enter Password" />
            <label className="password">Confirm Password</label>
            <input onChange={(e)=>setNewUser({...newUser, confirmPassword:e.target.value})}className="email-input input" type="password" placeholder="Confirm Password" /><br />
            <div className="checkbox-item">
                <input className="checkbox-input" type="checkbox" />
                <label className="checkbox-txt">I accept all Terms & Conditions</label><br />
            </div>
            <button className="login-btn" type='submit'>Signup</button><br/>
            <label className="login-link">Already a member?</label> 
            <Link to="/login" className="login-link"><strong>Login</strong></Link>
        </div>
    </form>
    </div>
    </>
  )
}
export {Signup};