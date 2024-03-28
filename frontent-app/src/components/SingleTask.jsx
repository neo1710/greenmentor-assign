import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../redux/taskReducer/taskAction";
import { useState } from "react";
import { AddTask } from "./AddTask";




export const SingleTask=({task,description,priority,status,_id})=>{
    const [load,setLoad]=useState(false);
    const [ed,setEd]=useState(false);
    const userData=useSelector((store)=>store.authReducer);//getting auth reducer state from redux store
    const data=useSelector((store)=>store.taskReducer);
    let dispatch=useDispatch();
    let col="";
    if(priority==="high"){
        col="red"
    }else if(priority==="medium"){
        col="yellow"
    }else{
        col="lightgreen"
    }

    function deleteTask(){
      axios.delete(`https://cautious-bear-bracelet.cyclic.app/tasks/${_id}`,{
        headers:{
            Authorization:`Bearer ${userData.token}`
        }
      }).then((res)=>{
        dispatch(getTask({token:userData.token,userId:userData.userId}))
      }).catch((err)=>{
        console.log(err)
      })
     
    }

    return(
        <div id={col} style={{margin:"auto", width:"80%", marginBottom:"10px"}}
        
         className=" border border-gray-300 p-4 rounded-md shadow-md">
            <div style={{display:ed?"":"none"}} className="edit">
  <AddTask req={"patch"}  nam={"Edit Task"} tas={task} descript={description} stat={status} prior={priority}
  to={_id}
  />
</div>
        <h3 className="text-blue-500 font-bold">{task}</h3>
        <p className="text-blue-500 font-bold">{description}</p> 
        <h4 className="font-bold text-green-800">Status:{status}</h4>
        <div><button onClick={()=>{deleteTask()}}
         className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  {load?"Loading..":"Delete"}
</button>
<button onClick={()=>{setEd(!ed)}}
         className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  {"Edit"}
</button>
</div>
      </div>
    )
}