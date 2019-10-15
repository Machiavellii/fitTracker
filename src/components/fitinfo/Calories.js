import React from 'react';
import { caloriesBurned } from '../../contex/helper';

const Calories = ({ calories }) => {
  return (
    <div className="calories mb-1">
      <div>
        {' '}
        <i className="fas fa-fire" />
      </div>
      <div className="describe text-center">
        <h3>Calories</h3>
        <span>Total Burned</span>
      </div>
      <div className="value-holder">
        <p className="p-value">{caloriesBurned(calories)}</p>
      </div>
    </div>
  );
};

export default Calories;
