import axios from 'axios';


export const loginReq=(data)=>(dispatch)=>{
dispatch({type:"LOGIN_REQUEST"});
axios.post(`https://cautious-bear-bracelet.cyclic.app/login`,data).then((res)=>{
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
axios.get(`https://cautious-bear-bracelet.cyclic.app/`,{
    headers:{Authorization:`Bearer ${token}`}
}).then((res)=>{
 console.log(res);   
dispatch({type:"LOGOUT_SUCCESS"});
}).catch((err)=>{
dispatch({type:'LOGIN_FAILED'});
console.log(err);
})
}