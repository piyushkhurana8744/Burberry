import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { authReducer } from "./AuthReducer/authReducer"
import thunk from "redux-thunk"
import CartReducer from "./CartReducer/cartReducer"
const rootReducer=combineReducers({
    auth:authReducer,
    cart:CartReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))