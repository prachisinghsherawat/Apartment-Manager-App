import {combineReducers,createStore, applyMiddleware} from "redux";
import { Loginreducer } from "./Login/reducer";
import { Residentreducer } from "./Resident/reducer";
import thunk from "redux-thunk"



const rootReducer = combineReducers({

    login:Loginreducer,
   resident :Residentreducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))