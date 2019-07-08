import { combineReducers } from "redux";
import tickets from 'reducers/tickets';
import { ObjectValues } from "utils/utilTypes";

const RootReducer = combineReducers({tickets})

export type RootState = ReturnType<typeof RootReducer>
export default RootReducer