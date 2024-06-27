import { useState } from "react";
import "./Login.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [success,setSuccess]=useState(false);
    const [load,setLoad]=useState(false);
    let navigate=useNavigate()
  function signin(e){
      e.preventDefault();
  let data={email,password:pass,name};
  setLoad(true);
    axios.post(`https://greenmentor-backend-r9jd.onrender.com/register`,data).then((res)=>{
  console.log(res);
setSuccess(true);
setLoad(false);
navigate("/login");
    }).catch((err)=>{
      console.log(err);
    })  
  }
    return(
        <div>
            <div style={{display:!success?"":"none"}} className="loginForm">
            <h1 className="text-2xl font-bold text-blue-500">Register here</h1> <br />
             <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="text" placeholder="Name" value={name}
                 onChange={(e)=>{setName(e.target.value)}}/> <br />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="email" placeholder="Enter Your Email"value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}/> <br />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="password" placeholder=" Enter Your Password"value={pass}
                 onChange={(e)=>{setPass(e.target.value)}}/> <br />
                  <button onClick={(e)=>{signin(e)}} 
                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 {load?"Loading...":"SignIn"}
                </button> <br />
            </div>
            <div style={{display:success?"":"none",marginTop:"200px", marginBottom:"200px"}} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Success!</strong>
  <span className="block sm:inline">Your account has been successfully registered.</span>
</div>
        </div>
    )
}