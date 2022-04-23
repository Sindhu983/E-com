import React from 'react'
import "./Login.css"
import { Navbar } from '..'
import {Link} from "react-router-dom"
import {useState} from 'react'
import {useAuth} from "../../Context/AuthContext/Auth/AuthContext"

function Login() {
    const [user, setUser] = useState({email:"",password:""})
    const {loginHandler} = useAuth()
  return (
      <>
    <Navbar />
    <div>
        <form onSubmit={(e) =>{ 
                    e.preventDefault()
                    loginHandler(user.email, user.password)
                    }}className="login-main-container">
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <section className="mail-password-container">
                <label htmlFor="/">Email address</label>
                <input onChange={(event)=>setUser({...user,email:event.target.value})} className="mail-input" type="email" placeholder="abc@gmail.com"/>
                <label htmlFor="/">Password</label>
                <input onChange={(event)=>setUser({...user,password:event.target.value})}className="pass-input" type="password" placeholder="password"/>
            </section>
            <section className="forget-password-section">
                <label htmlFor="/">
                    <input className="checkbox-inpt" type="checkbox" />
                    Remember me</label>
                <Link to="#" className="forget-pass-link">Forget Password?</Link>
            </section>
            <button className="login-btn" type='submit'>Login</button><br/>
            <Link to="/signup" className="create-account-link">Create New Account</Link>
        </div>
        </form>
    </div>
    </>
  )
}

export {Login};