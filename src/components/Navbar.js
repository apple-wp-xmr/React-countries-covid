import React from 'react';
import Logo from '../logo.png';
import SearchForm from '../components/SearchForm';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='navbar__logo' src={Logo} alt='' />
      <p className='navbar__text'>statistic</p>
      <SearchForm />
    </nav>
  );
};

export default Navbar;
