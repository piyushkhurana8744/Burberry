import {PostData,PatchData,GetData,deleteData} from "./actionTypes"

const initState={
    data:[]
}

const CartReducer=(state=initState,action)=>{
   switch(action.type){
    case GetData:{
        return{
            ...state,
            data:action.payload
        }
    }
    case PostData:{
        return{
            ...state,
            data:[...state.data,action.payload]
        }
    }
    case PatchData:{
        return{
            ...state
            
        }
    }
   
    case deleteData:{
        return{
            ...state       
        }
    }
    default :{
        return state
    }
   }
}
export default CartReducer