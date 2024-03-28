import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../redux/taskReducer/taskAction";

export const AddTask=({req,nam,tas,descript,prior,stat,to})=>{
const [task,setTask]=useState(tas);
const [desc,setDesc]=useState(descript);
const [priority,setPriority]=useState(prior);
const [status,setStatus]=useState(stat)
const [success,setSuccess]=useState(false);
const [load,setLoad]=useState(false);
const userData=useSelector((store)=>store.authReducer);//getting auth reducer state from redux store
    const data=useSelector((store)=>store.taskReducer);
let dispatch=useDispatch();

async function addTask(){
let data={task,description:desc,priority,status};
setLoad(true)
if(req==="post"){
axios.post(`https://cautious-bear-bracelet.cyclic.app/tasks/${to}`,data,{
  headers:{
    Authorization:`Bearer ${userData.token}`  
  }
}).then((res)=>{
setLoad(false)
setSuccess(true)
dispatch(getTask({token:userData.token,userId:userData.userId}));
setTimeout(()=>{//to reset the form
setSuccess(false)
setDesc("");
setPriority("");
setTask("");
setStatus("");
},2000)

}).catch((error)=>{
  setLoad(false)
console.log(error)
})
}else{
  axios.patch(`https://cautious-bear-bracelet.cyclic.app/tasks/${to}`,data,{
  headers:{
    Authorization:`Bearer ${userData.token}`  
  }
}).then((res)=>{
setLoad(false)
setSuccess(true)
dispatch(getTask({token:userData.token,userId:userData.userId}));
setTimeout(()=>{//to reset the form
setSuccess(false)
setDesc("");
setPriority("");
setTask("");
setStatus("");
},2000)

}).catch((error)=>{
  setLoad(false)
console.log(error)
})
}

}


return(
        <div className="addTask">
     <label class="block text-blue-500 text-sm font-bold mb-2 " for="username">
              Task
            </label>
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="text" placeholder="Task" value={task}
                 onChange={(e)=>{setTask(e.target.value)}}/> <br />
                 <label class="block text-blue-500 text-sm font-bold mb-2 " for="username">
              Description
            </label>
            <textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}}
             class="resize-none border rounded-md w-full h-32 px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </textarea> 
                <br />
                 <select value={priority} onChange={(e)=>{setPriority(e.target.value)}} 
                  class="block w-full px-4 py-2 mt-2 font-bold text-blue-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
  <option value="" disabled selected>Priority</option>
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</select> <br />
<select value={status} onChange={(e)=>{setStatus(e.target.value)}}
class="block w-full px-4 py-2 mt-2 font-bold text-blue-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
  <option value="" disabled selected>Status</option>
  <option value="completed">Completed</option>
  <option value="progress">Progress</option>
  <option value="not started">Not Started</option>
</select> <br />
                <button  style={{display:success?"none":""}}
                 onClick={(e)=>{addTask()}}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {load?"Loading..":nam}
                </button> <br />

                <div style={{display:success?"":"none", marginTop:"10px",margin:"auto",width:"80%"}}
                 className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Success!</strong>
  <span className="block sm:inline">Task Added.</span>
</div>
        </div>
    )
}