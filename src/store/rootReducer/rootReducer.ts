import { combineReducers } from "redux";
import notes from "../../features/Notes/reducer/notes";

const rootReducer = combineReducers({
  notes,
});
export default rootReducer;
