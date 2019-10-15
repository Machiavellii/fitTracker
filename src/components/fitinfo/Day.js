import React, { useContext } from 'react';

import FittrackContex from '../../contex/fitnesstrack/fittrackContext';
import Spinner from '../layout/Spinner';

import DayItem from './DayItem';

import '../../style/day.css';

const Day = () => {
  const fittrackContext = useContext(FittrackContex);

  const { daysInfo, loading } = fittrackContext;

  const sumSteps = daysInfo.map(data => {
    return data.steps;
  });

  let totalSteps = eval(sumSteps.join('+'));

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="dayPage">
        <DayItem steps={totalSteps} info={daysInfo} />
      </div>
    );
  }
};

export default Day;