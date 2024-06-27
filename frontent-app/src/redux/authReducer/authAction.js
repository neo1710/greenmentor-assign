import axios from 'axios';


export const loginReq=(data)=>(dispatch)=>{
dispatch({type:"LOGIN_REQUEST"});
axios.post(`https://greenmentor-backend-r9jd.onrender.com/login`,data).then((res)=>{
 console.log(res);   
dispatch({type:"LOGIN_SUCCESS",payload:res.data});
}).catch((err)=>{
dispatch({type:'LOGIN_FAILED'});
console.log(err);
})
}

export const logout=()=>(dispatch)=>{
    dispatch({type:"LOGIN_REQUEST"});
   let token= localStorage.getItem('token');
axios.get(`https://greenmentor-backend-r9jd.onrender.com/`,{
    headers:{Authorization:`Bearer ${token}`}
}).then((res)=>{
 console.log(res);   
dispatch({type:"LOGOUT_SUCCESS"});
}).catch((err)=>{
dispatch({type:'LOGIN_FAILED'});
console.log(err);
})
}