import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FittrackContex from '../../contex/fitnesstrack/fittrackContext';

const DaysNav = () => {
  let [addClass] = useState('');
  let [addClass1] = useState('');
  let [active, setActive] = useState(false);

  const fittrackContext = useContext(FittrackContex);

  const { showDayInfo } = fittrackContext;

  addClass = e => {
    setActive((active = !active));
    console.log(e.target.className);
  };

  addClass1 = e => {
    setActive((active = !active));
  };

  return (
    <div className="days grid-5 text-center mb-1">
      <NavLink to="/day" onClick={showDayInfo.bind(this, '10 Jun 2019')}>
        <div className="mon">
          <span>10</span>
          <span>MON</span>
        </div>
      </NavLink>

      <NavLink to="/day" onClick={showDayInfo.bind(this, '11 Jun 2019')}>
        <div className="tue">
          <span>11</span>
          <span>TUE</span>
        </div>
      </NavLink>

      <NavLink to="/day" onClick={showDayInfo.bind(this, '12 Jun 2019')}>
        <div className="wed">
          <span>12</span>
          <span>WED</span>
        </div>
      </NavLink>

      <NavLink to="/day" onClick={showDayInfo.bind(this, '13 Jun 2019')}>
        <div className="thu">
          <span>13</span>
          <span>THU</span>
        </div>
      </NavLink>

      <NavLink to="/day" onClick={showDayInfo.bind(this, '14 Jun 2019')}>
        <div className="fri">
          <span>14</span>
          <span>FRI</span>
        </div>
      </NavLink>
    </div>
  );
};

export default DaysNav;
