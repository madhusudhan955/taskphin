import { START_LOADING, STOP_LOADING } from "../constents";

const intialState = {
  isLoading: false,
};
const globalReducer = (state = intialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default globalReducer;
