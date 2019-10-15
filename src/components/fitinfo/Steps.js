import React from 'react';

const Steps = ({ steps }) => {
  return (
    <div className="steps mb-1">
      <div>
        <i className="fas fa-walking" />
      </div>{' '}
      <div className="describe text-center ">
        <h3>Steps</h3>
        <span>Total</span>
      </div>
      <div className="value-holder ">
        <p className="p-value">{steps}</p>
      </div>
    </div>
  );
};

export default Steps;
