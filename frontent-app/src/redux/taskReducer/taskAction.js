import axios from 'axios';


export const getTask=(data)=>(dispatch)=>{
    dispatch({type:"GET_REQUEST"});   
    axios.get(`https://cautious-bear-bracelet.cyclic.app/tasks/${data.userId}`, {
  headers: {
    Authorization: `Bearer ${data.token}` // This is how you include the token in the headers
  }
})
.then(response => {
  console.log(response.data);
  dispatch({type:"GET_SUCCESS",payload:response.data})
})
.catch(error => {
  console.error('Error:', error);
  dispatch({type:"GET_FAILED"})
});
}



