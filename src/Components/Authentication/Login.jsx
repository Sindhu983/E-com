import React from 'react'
import { Navbar } from '..'
import "./Login.css"
import {Link} from "react-router-dom"

function Login() {
  return (
      <>
      <Navbar/>
      <div className="container">
            <div className="forms">
                <div className="form login">
                    <span className="title">Login</span>
                    <form action="#">
                        <div className="input-field">
                            <input type="text" placeholder="Enter your email" required />
                        </div>
                        <div className="input-field">
                            <input type="password" className="password" placeholder="Enter your password" required />
                            <i className="uil uil-eye-slash showHidePw"></i>
                        </div>
                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" id="logCheck" />
                                <label htmlFor="logCheck" className="text">Remember me</label>
                            </div>
                            <Link to="/password" className="text">Forgot password?</Link>
                        </div>
                        <div className="input-field button">
                            <input type="button" value="Login Now" />
                        </div>
                    </form>
                    <div className="login-signup">
                        <span className="text">Not a member?
                            <Link to="/signup" className="text signup-link">Signup now</Link>
                        </span>
                    </div>
                </div>
                <div className="form signup">
                    <span className="title">Signup</span>
                    <form action="#">
                        <div className="input-field">
                            <input type="text" placeholder="Enter your name" required />
                        </div>
                        <div className="input-field">
                           <input type="text" placeholder="Enter your email" required />
                        </div>
                        <div className="input-field">
                            <input type="password" className="password" placeholder="Create a password" required />
                        </div>
                        <div className="input-field">
                            <input type="password" className="password" placeholder="Confirm a password" required />
                            <i className="uil uil-eye-slash showHidePw"></i>
                        </div>
                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" id="sigCheck" />
                                <label htmlFor="sigCheck" className="text">Remember me</label>
                            </div>
                            <Link to="/password" className="text">Forgot password?</Link>
                        </div>
                        <div className="input-field button">
                            <input type="button" value="Login Now" />
                        </div>
                    </form>
                    <div className="login-signup">
                        <span className="text">have a member
                            <Link to="/login-page" className="text login-link">Login now</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>   
      </>
  )
}

export {Login};