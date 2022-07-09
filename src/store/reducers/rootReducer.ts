import { combineReducers } from "redux";

const rootReducer = combineReducers({});
export default combineReducers({});

declare global {
  // eslint-disable-next-line no-undef
  type TRootState = ReturnType<typeof rootReducer>;
}
