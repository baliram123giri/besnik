import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import config  from '../../data/config.json';
import Loader from '../../loaders/Loader';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
// craeting user
const [user,setUser] = useState({username:"",email:"",password:""})
const [loader, setLoader] = useState(false)

const registerFormhandler = (e) =>{
    setLoader(true)
    e.preventDefault()
    fetch(`${ config.prod_uri }/api/auth/local/register`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
  .then(res=>res.json())
  .then(data=>{
      setLoader(false)
      if(data.user){
        setUser({...user,username:"",email:"",password:""})
        toast.success("User Registered Successfully!", {
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
        toast.error(data.error.message, {
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
  .catch(err=>{
      setLoader(false)
      
  })
}
  return (
    <div className="container my-3 my-md-5 b_user_form">
     {loader?<Loader/>:null}
     <ToastContainer />
    <form onSubmit={registerFormhandler} className='w-50 shadow p-4 m-auto text-center rounded-3 b_form ' >
        <h5 className='mb-4'>SIGN UP</h5>
        <div className="mb-3 b_input_box d-flex align-items-center">
            <i className="far fa-id-badge  b_form_icon mx-2"></i>
            <input required  type="text" className="form-control ms-2" placeholder='username' value={user.username} onChange={(e)=>setUser({...user, username:e.target.value})} />
        </div>
        <div className="mb-3 b_input_box d-flex align-items-center">
            <i className="far fa-envelope  b_form_icon mx-2"></i>
            <input  required type="email" className="form-control" placeholder='Email' value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}  />
        </div>
        <div className="mb-3 b_input_box d-flex align-items-center">
            <i className="fas fa-lock  b_form_icon mx-2"></i>
            <input  required type="password" className="form-control" placeholder='Password' value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})} />
        </div>
        <button type="submit" className="btn b_rounded_btn text-white border-0 px-3 py-2">CREATE ACCOUNT</button>
        <span className='d-block my-3 '>Already a member? <Link to={"/login"} className='b_use_auth text-decoration-none'>Login</Link></span>
   </form>
    </div>
  );
}
