import { useState,useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginReq} from "../redux/authReducer/authAction";
import {useNavigate, useLocation} from "react-router-dom"
import "./Login.css"


export const Login=()=>{
    
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const userData=useSelector((store)=>store.authReducer);//getting auth reducer state from redux store
    const dispatch =useDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
        if (userData.isAuth === true) {
          setTimeout(() => {
            if (location.state) {
              navigate(location.state);
            } else {
              navigate("/");
            }
          }, 2000);
        }
      }, [userData]);

    function doit(e) {//login function
        e.preventDefault();
        let data = { email, password: pass };
        dispatch(loginReq(data));
        setEmail("");
        setPass("");
      }

    return(
        <div>
            <div style={{display:userData.isAuth?"none":""}} className="loginForm">
                
            <label class="block text-blue-500 text-sm font-bold mb-2 " for="username">
              Enter Your Email
            </label>
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="email" placeholder="Email" value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}/> <br />
                 <label class="block text-blue-500 text-sm font-bold mb-2 " for="username">
              Enter Your Password
            </label>
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="password" placeholder="Password" value={pass}
                 onChange={(e)=>{setPass(e.target.value)}}/> <br />
                <button onClick={(e)=>{doit(e)}}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {userData.isLoading?"Loading...":"Login"}
                </button> <br />
                <p class="text-base text-gray-700">
 If you are not an existing user 
  <a href="/register" class="text-blue-500 hover:underline"> Register here</a>
</p>
            </div>
            

            <div style={{display:userData.isAuth?"":"none", marginTop:"200px", marginBottom:"200px"}} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Success!</strong>
  <span className="block sm:inline">Login successfull.</span>
</div>
        </div>
    )
}