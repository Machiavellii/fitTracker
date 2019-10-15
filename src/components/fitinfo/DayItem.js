import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DaysNav from './DaysNav';
import moment from 'moment';

import { showtime, totalKm, caloriesBurned } from '../../contex/helper';

const DayItem = ({ steps, info }) => {
  const day = info.map(dayy => {
    return moment(dayy.timestamp).format('dddd');
  });

  const month = info.map(dayy => {
    return moment(dayy.timestamp).format('MMMM Do, YYYY');
  });

  return (
    <Fragment>
      <header className="text-center mb-1">
        <Link to="/" className="backBtn">
          <i className="fas fa-chevron-left"></i>
        </Link>
        <div className="dateInfo">
          <h1>{day[0]}</h1>
          <p>{month[0]}.</p>
        </div>
      </header>
      <DaysNav />
      <div className="content">
        <div className="container">
          <div className="content-steps my-2">
            <div className="steps-describe">
              <i className="fas fa-walking" />
              <h6>Steps</h6>
              <p>{steps}</p>
            </div>
          </div>
          <div className="heading my-2 text-center">
            <h3>Very Good</h3>
            <h1>Keep Going!</h1>
          </div>
        </div>
        <div className="report my-2">
          <div className="km">
            <span>km</span>
            <p>{totalKm(steps)}</p>
          </div>
          <div className="cal">
            <span>cal</span>
            <p>{caloriesBurned(steps)}</p>
          </div>
          <div className="hours">
            <span>hours</span>
            <p>{showtime(steps)}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DayItem;
