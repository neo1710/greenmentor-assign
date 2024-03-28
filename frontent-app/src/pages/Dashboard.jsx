import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "../components/AddTask";
import "./Dashboard.css"
import { useEffect } from "react";
import { getTask } from "../redux/taskReducer/taskAction";
import { SingleTask } from "../components/SingleTask";

export const Dashboard=()=>{
    const userData=useSelector((store)=>store.authReducer);//getting auth reducer state from redux store
    const data=useSelector((store)=>store.taskReducer);
const dispatch=useDispatch()
useEffect(()=>{
    let requestData={token:userData.token,userId:userData.userId};
    dispatch(getTask(requestData));
},[userData.token, userData.userId, dispatch])




console.log(data,userData);

    return(
        <div>
            <h3 style={{display:userData.isAuth?"none":"",marginTop:"100px"}}><h3 class="text-xl font-bold mb-2"> 
  <a href="/login" className="text-blue-500 hover:underline">Login</a> to get started
</h3></h3>

<div style={{display:userData.isAuth?"":"none"}}>

<div className="mainDiv">
<div style={{width:"50%"}}>
    <AddTask req={"post"} nam={"Add Task"} tas={""} descript={""} stat={""} prior={""} to={"add"}/>
    </div>
    <div className="allTasks">
    <h2 className="text-2xl font-bold text-blue-500">Here are your tasks {userData.userName}</h2> <br />
{data.tasks.map((ele,i)=>(
    <SingleTask key={i} task={ele.task} description={ele.description}
    status={ele.status} priority={ele.priority} _id={ele._id} to={"add"}
    />
))}
    </div>
</div>


</div>
        </div>
    )
}