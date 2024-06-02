import { combineReducers } from "redux";
import addBusket from '../reducers/user/addBusketSlice'


export const rootReducer = combineReducers({
    busket:addBusket,
})