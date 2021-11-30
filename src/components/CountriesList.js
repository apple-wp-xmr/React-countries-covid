import React from 'react';
import Country from './Country';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CountriesList = () => {
  const { CountriesDisplay, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (CountriesDisplay.length < 1) {
    return (
      <h2 className='section-titile'>
        No country matched your search criteria
      </h2>
    );
  }
  return (
    <section className='virus'>
      <div className='item item--blue'>
        <div className='item__number item__number--header '>№</div>
        <div className='item__country item__country--header'>Country</div>
        <div className='item__total item__total--header'>Total Confirmed</div>
      </div>
      {CountriesDisplay.map((item, index) => {
        return <Country key={item.ID} {...item} number={index} />;
      })}
    </section>
  );
};

export default CountriesList;
