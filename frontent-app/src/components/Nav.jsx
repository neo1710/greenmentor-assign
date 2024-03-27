import { useState } from "react"
import { Link } from "react-router-dom"


export const Nav=()=>{
const [men,setMen]=useState(false);
    return(
        <div className="Nav">
            <h2 className="text-2xl font-bold text-blue-500">TrackTask</h2>
        <div className="allLinks">
        <Link className="link" to={"/"}><button className="links">Home</button></Link> 
        <Link className="link" to={"/dashboard"}><button className="links">Dashboard</button></Link> 
        <Link className="link" to={"/register"}><button className="links">Register</button></Link> 
        <Link className="link" to={"/login"}><button className="links">Login</button></Link> 
        </div>
        <div style={{display:men?"flex":""}} className="menu">
        <Link className="link" to={"/"}>Home</Link> 
        <Link className="link" to={"/dashboard"}>Dashboard</Link> 
        <Link className="link" to={"/register"}>Register</Link> 
        <Link className="link" to={"/login"}>Login</Link> 
        </div>
        <button onClick={()=>{setMen(!men)}} className="menuBut">Menu</button>
        </div>
    )
}