// store.ts
import { createStore, applyMiddleware } from "redux";
import { ThunkMiddleware } from "redux-thunk";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { AnyAction } from "redux";

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, AnyAction>)
);
