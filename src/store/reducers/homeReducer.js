import { GET_JOBS } from "../constents";

const intialState = {
  jobs: [],
};
const homeReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    default:
      return state;
  }
};
export default homeReducer;
