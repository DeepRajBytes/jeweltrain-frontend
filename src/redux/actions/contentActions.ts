import axios from "axios";
import { Dispatch } from "redux";
import { AllRoutes } from "../../Environment/routes";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const SET_CONTENT = "SET_CONTENT";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const setContent = (content: any) => ({
  type: SET_CONTENT,
  payload: content,
});

export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchContent = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.get(`${AllRoutes.SITE_DATA}`);
      dispatch(setContent(res?.data?.data[0]));
    } catch (err: any) {
      dispatch(setError(err.message || "Failed to fetch content"));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
