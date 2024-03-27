import {Routes,Route} from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";


export const AllRoutes=()=>{

    return(
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}