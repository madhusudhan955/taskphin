import { START_LOADING, STOP_LOADING } from "../constents";

export const startLoadingAction = () => {
  return {
    type: START_LOADING,
  };
};
export const stopLoadingAction = () => {
  return {
    type: STOP_LOADING,
  };
};
