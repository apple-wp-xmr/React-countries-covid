import React from 'react';

const Country = ({
  ID,
  Country,
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
  number,
}) => {
  return (
    <div className='item'>
      <div className='item__number '>{number + 1}</div>
      <div className='item__country'>{Country}</div>
      <div className='item__total'>{TotalConfirmed}</div>
    </div>
  );
};

export default Country;
