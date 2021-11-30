import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCountry = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action='' className='search' onSubmit={handleSubmit}>
      <input
        className='search__input'
        type='text'
        id='name'
        placeholder='Search...'
        ref={searchValue}
        onChange={searchCountry}
      ></input>
    </form>
  );
};

export default SearchForm;
