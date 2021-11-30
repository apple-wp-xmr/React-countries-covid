import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://api.covid19api.com/summary';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [CountryList, setCountryList] = useState([]);
  const [CountriesDisplay, setCountriesDisplay] = useState([]);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const { Countries } = data;
      if (Countries) {
        const newCountries = Countries.map((item) => {
          const { ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered } =
            item;
          return { ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered };
        });
        setCountryList(newCountries);
        setCountriesDisplay(newCountries);
      } else {
        setCountryList([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setCountriesDisplay(CountryList);
      return;
    }

    const filteredCountries = CountryList.filter((item) =>
      item.Country.toLowerCase().includes(searchTerm)
    );

    // filteredCountries.sort((a, b) => {
    //   if () {
    //     return -1;
    //   }

    //   if () {
    //     return 0;
    //   }

    //   return 1;
    // });

    setCountriesDisplay(filteredCountries);
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, CountriesDisplay, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
