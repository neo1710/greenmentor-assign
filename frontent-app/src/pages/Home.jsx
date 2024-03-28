import axios from "axios"
import "./Home.css"
import { Navigate,Link } from "react-router-dom"
import { useEffect, useState } from "react"
import img1 from "../images/Screenshot (187).png"
import img2 from "../images/Screenshot (188).png"

export const Home=()=>{
let images=[img1,img2];  
  


    return(
        <div>
         
            <h1 className="text-2xl font-bold text-blue-500">Welcome to TrackTask</h1>

                <div className="written">
                 <p>
                    You can create tasks that you want to do and manage them. <br />
                    You can manage status of the task and you can also give priority to it.
                    And you can do it all on this TrackTask.  
                 </p>
                </div><br />

                <div className="slide" style={{width:"70%",margin:"auto"}}>
                    <img src={images[0]} alt="err" />
                </div> <br />
                <Link to={"/dashboard"}>  <button className="get">Get Started</button></Link>
         
        </div>
    )
}