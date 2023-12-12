import { apiServices } from "../../apis/api.utils";
import { GET_JOBS } from "../constents";
import { startLoadingAction, stopLoadingAction } from "./globalActions";

export const getJobsAction = (data) => {
  return {
    type: GET_JOBS,
    payload: data,
  };
};
export const getJobsAsyncAction = () => {
  return (dispatch, getState) => {
    dispatch(startLoadingAction());
    try {
      apiServices({ url: "/job" }).then((res) => {
        if (res.success) {
          dispatch(getJobsAction(res.job));
        } else {
          console.log("error", res);
        }
        dispatch(stopLoadingAction());
      });
    } catch (err) {
      console.log(err);
      dispatch(stopLoadingAction());
    }
  };
};
export const createJobAsyncAction = (data) => {
  return (dispatch, getState) => {
    dispatch(startLoadingAction());
    try {
      apiServices({ url: "/job", data, method: "post" }).then((res) => {
        if (res.success) {
          dispatch(getJobsAsyncAction());
        } else {
          console.log("error", res);
          dispatch(stopLoadingAction());
        }
      });
    } catch (err) {
      console.log(err);
      dispatch(stopLoadingAction());
    }
  };
};
export const updateJobAsyncAction = (data) => {
  return (dispatch, getState) => {
    dispatch(startLoadingAction());
    try {
      apiServices({ url: `/job/${data._id}`, data, method: "put" }).then(
        (res) => {
          if (res.success) {
            dispatch(getJobsAsyncAction());
          } else {
            console.log("error", res);
            dispatch(stopLoadingAction());
          }
        }
      );
    } catch (err) {
      console.log(err);
      dispatch(stopLoadingAction());
    }
  };
};
export const deleteJobAsyncAction = (id) => {
  return (dispatch, getState) => {
    dispatch(startLoadingAction());
    try {
      apiServices({ url: `/job/${id}`, method: "delete" }).then((res) => {
        if (res.success) {
          dispatch(getJobsAsyncAction());
        } else {
          console.log("error", res);
          dispatch(stopLoadingAction());
        }
      });
    } catch (err) {
      console.log(err);
      dispatch(stopLoadingAction());
    }
  };
};
