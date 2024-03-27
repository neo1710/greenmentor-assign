import axios from "axios"
import "./Home.css"
import { Navigate,Link } from "react-router-dom"


export const Home=()=>{
   
    function done(){
    
    }
    return(
        <div>
         
            <h1 className="text-2xl font-bold text-blue-500">Welcome to TrackTask</h1>

                <div className="written">
                 <p>
                    You can create tasks that you want to do and manage them. <br />
                    You can manage status of the task and you can also give priority to it.
                    And you can do it all on this single website  
                 </p>
                </div><br />
                <Link to={"/login"}>  <button className="get">Get Started</button></Link>
         
        </div>
    )
}