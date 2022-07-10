import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction, applyMiddleware, createStore } from "redux";

import rootReducer from "./rootReducer/rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export default store;
