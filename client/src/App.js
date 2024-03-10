import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import CsvTable from './components/CsvTable';
import Search from './components/Search';

import { getFoodTrucksData } from './api/foodtruck';

import './styles.css';

function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [searchRes, setSearchRes] = useState(null);

  useEffect(() => {
    getFoodTrucks();
  }, []);

  const getFoodTrucks = async () => {
    try {
      const res = await getFoodTrucksData();
      setFoodTrucks(res.data);
    } catch(e) {
      console.error('Error fetching CSV data: ', e);
    };
  }

  const handleSearch = val => {
    if (val) {
      const res = foodTrucks.filter((item) => {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            return (new RegExp(val)).test(item[key]);
          }
        }
      })
      setSearchRes(res);
    } else {
      setSearchRes(foodTrucks);
    }
  }

  return (
    <div className="App">
      <h1>San Francisco Food Trucks</h1>
      <Search onSearch={handleSearch} />
      <CsvTable data={searchRes || foodTrucks} />
      <Map data={searchRes || foodTrucks} />
    </div>
  );
}

export default App;