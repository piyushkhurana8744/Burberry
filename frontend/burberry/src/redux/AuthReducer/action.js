import {Login,Logout,Register} from "./actionTypes"
import axios from "axios"
export const userRegister=(formstate)=>async(dispatch)=>{
    const res=await axios.post("https://white-lovebird-ring.cyclic.app/user/register",formstate)
    return dispatch({type:Register,payload:res.data})
}

export const userLogin=(formstate)=>async(dispatch)=>{
    const res=await axios.post("https://white-lovebird-ring.cyclic.app/user/login",formstate)
    return dispatch({type:Login,payload:res.data})
}

export const userLogout=()=>async(dispatch)=>{
    return dispatch({type:Logout})
}