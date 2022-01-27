// import the constant  
 import { USER_SIGNUP, USER_SIGNIN } from "../Const/Const";

 //2. create the actions 

 export function userSign (){
    return{
        type:USER_SIGNIN
    }
 }
 export function userSignup (){
    return{
        type:USER_SIGNUP
    }
 }
