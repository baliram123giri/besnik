 //1. import the const 
import { USER_SIGNUP, USER_SIGNIN } from "../Const/Const";

//2. define the initial state

const initialState = {
    login:true
}

//let's create the reducer

export const loginReducer = (state=initialState,action)=>{
    switch(action.type){
        case USER_SIGNIN:
            return{
                login:true
            }
            break
        case USER_SIGNUP:
            return{
                login:false
            }
           break
        default:
        return state
    }
}