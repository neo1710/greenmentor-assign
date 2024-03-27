

const initialState={
token:"",
userId:"",
userName:"",
isError:false,
isAuth:false,
isLoading:false,
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case 'LOGIN_SUCCESS':{
            return {
                ...state,
                isAuth:true,
                token:payload.token,
                userId:payload.id,
                userName:payload.name,
                isLoading:false
            }
        }
        case 'LOGIN_FAILED':{
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        }
            case 'LOGIN_REQUEST':{
                return {
                    ...state,
                    isLoading:true
                }
            }
            case 'LOGOUT_SUCCESS':{
                return {
                    ...initialState
                }
            }

        default: return state
    }
}