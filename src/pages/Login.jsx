import React from 'react'

import { useState} from "react"
import { useDispatch } from 'react-redux'
import {login} from "../store/UserSlice"

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      email:email,
      password:password,
      loggedIn:true
    }))
  };

  return (
    <div className='container mt-5 mb-5 mx-5 justify-center w-100'>
       <div className="row justify-center">
        <div className="col-md-6">
          <div className="card">
            <h3 className=" text-center mt-4">
              Login
            </h3>
            <form className=" form-check p-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email address</label>
                <input
                  type="email"
                  value={email}
                  className="form-control"
                  placeholder="Enter Your Email"
                onChange={(e) =>setEmail(e.target.value)}
                required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  placeholder="Enter Your Password"
                  onChange={(e) =>setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className=" btn btn-danger ">
                Submit
              </button>
            </form>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login