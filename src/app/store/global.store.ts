import { combineReducers, createStore } from "redux";
import { authReducer, AuthState } from "./auth";

const rootReducer = combineReducers<GlobalState>({
  auth: authReducer,
});

const store = createStore(rootReducer);

export interface GlobalState {
  auth: AuthState;
}

export default store;
