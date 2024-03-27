import { useState } from "react";
import "./Login.css"
import axios from "axios";


export const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    
  function signin(e){
      e.preventDefault();
  let data={email,password:pass,name};
    axios.post(`https://glorious-twill-moth.cyclic.app/register`,data).then((res)=>{
  console.log(res);
    }).catch((err)=>{
      console.log(err);
    })  
  }
    return(
        <div>
            <div className="loginForm">
             <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="text" placeholder="Name" value={name}
                 onChange={(e)=>{setName(e.target.value)}}/> <br />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="email" placeholder="Enter Your Email"value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}/> <br />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="password" placeholder=" Enter Your Password"value={pass}
                 onChange={(e)=>{setPass(e.target.value)}}/> <br />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 Login
                </button> <br />
            </div>
        
        </div>
    )
}