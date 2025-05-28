/* eslint-disable @typescript-eslint/no-explicit-any */
// redux/reducers/contentReducer.ts
import { SET_CONTENT, SET_LOADING, SET_ERROR } from "../actions/contentActions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const contentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_CONTENT:
      return { ...state, data: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
