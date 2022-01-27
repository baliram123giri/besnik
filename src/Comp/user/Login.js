
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../../loaders/Loader';
const config = require("../../data/config.json")
export default function Login() {
  
   const [user,setUser] = useState({ identifier: '',password: ''})
   const [loader, setLoader] = useState(false)
   const userLoginHandler = (e)=>{
    setLoader(true)
     e.preventDefault()
     // api fetch\

     fetch(`${ config.prod_uri }/api/auth/local`,{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify(user)
     })
     .then(res=>res.json())
     .then(data=>{
      setLoader(false)
      if(data.user){
        setUser({...user,identifier: '',password: ''})
        toast.success(data.user.username, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
      if(data.error){
        toast.error("Invalid email or password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
  })
     .catch(err=>console.log(err))
   }
  return (
    <div className="container my-3 my-md-5 b_user_form">
     {loader?<Loader/>:null}
     <ToastContainer />
    <form onSubmit={userLoginHandler} className='w-50 shadow p-4 m-auto text-center rounded-3 b_form' >
        <h5 className='mb-4'>LOGIN</h5>
        <div className="mb-3 b_input_box d-flex align-items-center">
            <i className="far fa-envelope  b_form_icon mx-2"></i>
            <input required type="email" className="form-control" placeholder='Email' value={user.identifier} onChange={e=>setUser({...user,identifier:e.target.value})} />
        </div>
        <div className="mb-3 b_input_box d-flex align-items-center">
            <i className="fas fa-lock  b_form_icon mx-2"></i>
            <input required type="password" className="form-control" placeholder='Password' value={user.password} onChange={e=>setUser({...user,password:e.target.value}) }/>
        </div>
        <button type="submit" className="btn b_rounded_btn text-white border-0 px-3 py-2">LOGIN</button>
        <span className='d-block my-3 '>Not a member yet? <Link to={"/register"} className='b_use_auth text-decoration-none'>Create Account</Link></span>
   </form>
    </div>

  )
}
