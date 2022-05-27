import { combineReducers } from "redux";
import { PollutionReducer } from "./components/pollution";

export default combineReducers({
  pollutionState: PollutionReducer
});
