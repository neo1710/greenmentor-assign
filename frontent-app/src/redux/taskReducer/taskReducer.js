

const initialState={
tasks:[],
isLoading:false,
isError:false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case 'GET_SUCCESS':{
            return {
                ...state,
               tasks:payload.tasks,
                isLoading:false
            }
        }
        case 'GET_FAILED':{
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        }
            case 'GET_REQUEST':{
                return {
                    ...state,
                    isLoading:true
                }
            }

        default: return state
    }
}