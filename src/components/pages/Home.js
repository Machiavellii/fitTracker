import React, { useContext, useEffect } from 'react';
import '../../style/home.css';
import FittrackContex from '../../contex/fitnesstrack/fittrackContext';

import DaysNav from '../fitinfo/DaysNav';
import Activity from '../fitinfo/Activity';
import Calories from '../fitinfo/Calories';
import Steps from '../fitinfo/Steps';
import Spinner from '../layout/Spinner';

const Home = () => {
  const fittrackContext = useContext(FittrackContex);

  const { getData, fitnessData, loading } = fittrackContext;

  useEffect(() => {
    getData();
  }, []);

  const sumSteps = fitnessData.map(data => {
    return data.steps;
  });

  let totalSteps = eval(sumSteps.join('+'));

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="home">
        <header className="text-center mb-1">
          <h1>Welcome!</h1>
          <p>Overview of your activity</p>
        </header>
        <DaysNav />
        <Activity activity={totalSteps} />
        <Steps steps={totalSteps} />
        <Calories calories={totalSteps} />
      </div>
    );
  }
};

export default Home;
