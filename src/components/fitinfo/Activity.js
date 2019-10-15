import React from 'react';
import { showtime } from '../../contex/helper';

const Activity = ({ activity }) => {
  return (
    <div className="activity mb-1">
      <div>
        <i className="fas fa-stopwatch" />
      </div>
      <div className="text">
        <h3>Activity</h3>
        <span>Average</span>
      </div>
      <p className="p-text">{showtime(activity)}</p>
    </div>
  );
};

export default Activity;
