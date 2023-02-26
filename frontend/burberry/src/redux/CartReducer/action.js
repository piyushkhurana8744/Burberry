import {PostData,PatchData,GetData,deleteData} from "./actionTypes"

import axios from "axios"

export const productdata=()=>async(dispatch)=>{
    const token=localStorage.getItem("token")
    const res=await axios.get("https://white-lovebird-ring.cyclic.app/cart",{
        headers:{
            Authorization:token
        }
    })
    console.log(res.data)
    return dispatch({type:GetData,payload:res.data})
}

export const AddProductData=(product)=>async(dispatch)=>{
    const token=localStorage.getItem("token")
    const res=await axios.post("https://white-lovebird-ring.cyclic.app/cart/create",product,{
        headers:{
            'Content-Type': 'application/json',
            Authorization:token
        }
        
    })
    console.log(res.data)
    return dispatch({type:PostData,payload:res.data})
}
export const PatchProductData=(el)=>async(dispatch)=>{
    const token=localStorage.getItem("token")
    const res=await axios.patch(`https://white-lovebird-ring.cyclic.app/cart/${el._id}`,{quantity:Number(el.quantity)+1},{
        headers:{
            "Content-Type": "application/json",
        Authorization: token,
        }
        
    })
    console.log(res.data)
    return dispatch({type:PatchData,paylod:res.data})
}
export const SubProductData=(el)=>async(dispatch)=>{
    const token=localStorage.getItem("token")
    const res=await axios.patch(`https://white-lovebird-ring.cyclic.app/cart/${el._id}`,{quantity:Number(el.quantity)-1},{
        headers:{
            "Content-Type": "application/json",
        Authorization: token,
        }
        
    })
    console.log(res.data)
    return dispatch({type:PatchData,paylod:res.data})
}

export const DeleteProductData=(id)=>async(dispatch)=>{
    const token=localStorage.getItem("token")
    const res=await axios.delete(`https://white-lovebird-ring.cyclic.app/cart/${id}`,{
        headers:{
            Authorization:token
        }
        
    })
    console.log(res.data)
    alert(res.data.msg)
    return dispatch({type:deleteData})
}
