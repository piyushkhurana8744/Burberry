import {Login,Logout,Register} from "./actionTypes"
 
const token =localStorage.getItem("token")
const name=localStorage.getItem("name")
const initState={
    token:!!token,
    msg:"",
    name:name
}

export const authReducer=(state=initState,action)=>{
   switch(action.type){
    case Register:{
        return{
            ...state,
            msg:action.payload
        }
    }
    case Login :{
        localStorage.setItem("token",action.payload.token)
        localStorage.setItem("name",action.payload.name)
        return{
            ...state,
            token:action.payload.token,
            msg:action.payload.msg,
            name:action.payload.name
        }
    }
    case Logout :{
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        return{
            ...state,
            token:"",
            name:""
        }
    }
    default:{
        return state
    }
   }
}