import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FittrackContex from '../../contex/fitnesstrack/fittrackContext';

const DaysNav = () => {
  const fittrackContext = useContext(FittrackContex);

  const { showDayInfo } = fittrackContext;

  return (
    <div className="days grid-5 text-center mb-1">
      <Link to="/day" onClick={showDayInfo.bind(this, '10 Jun 2019')}>
        <div>
          <span>10</span>
          <span>MON</span>
        </div>
      </Link>

      <Link to="/day" onClick={showDayInfo.bind(this, '11 Jun 2019')}>
        <div>
          <span>11</span>
          <span>TUE</span>
        </div>
      </Link>

      <Link to="/day" onClick={showDayInfo.bind(this, '12 Jun 2019')}>
        <div>
          <span>12</span>
          <span>WED</span>
        </div>
      </Link>

      <Link to="/day" onClick={showDayInfo.bind(this, '13 Jun 2019')}>
        <div>
          <span>13</span>
          <span>THU</span>
        </div>
      </Link>

      <Link to="/day" onClick={showDayInfo.bind(this, '14 Jun 2019')}>
        <div>
          <span>14</span>
          <span>FRI</span>
        </div>
      </Link>
    </div>
  );
};

export default DaysNav;
