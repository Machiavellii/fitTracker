import React, { useReducer } from 'react';
import axios from 'axios';
import FittrackContex from './fittrackContext';
import FittrackReducer from './fittrackReducer';
import moment from 'moment';

import {
  GET_FITNESSDATA,
  CLEAR_FITNESSDATA,
  SET_LOADING,
  DAYS_INFO
} from '../types';

const FittrackState = props => {
  const initialState = {
    fitnessData: [],
    daysInfo: [],

    loading: false
  };

  const [state, dispatch] = useReducer(FittrackReducer, initialState);

  // GET DATA FITNESS TRACK
  const getData = async () => {
    setLoading();

    const res = await axios.get('https://api.myjson.com/bins/1gwnal');

    dispatch({
      type: GET_FITNESSDATA,
      payload: res.data
    });
  };

  // Day Info
  const showDayInfo = dayDate => {
    setLoading();

    const filterDate = state.fitnessData.filter(time => {
      return moment(time.timestamp).format('DD MMM YYYY') === dayDate;
    });

    dispatch({
      type: DAYS_INFO,
      payload: filterDate
    });
  };

  // Clear Data
  const clearData = () => dispatch({ type: CLEAR_FITNESSDATA });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <FittrackContex.Provider
      value={{
        fitnessData: state.fitnessData,
        loading: state.loading,
        daysInfo: state.daysInfo,
        clearData,
        getData,
        showDayInfo
      }}
    >
      {props.children}
    </FittrackContex.Provider>
  );
};

export default FittrackState;
