import { GET_FITNESSDATA, SET_LOADING, DAYS_INFO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FITNESSDATA:
      return {
        ...state,
        fitnessData: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case DAYS_INFO:
      return {
        ...state,
        daysInfo: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
