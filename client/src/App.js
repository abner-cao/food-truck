import React, { useState, useEffect } from 'react';
// import Map from './components/Map';
import CsvTable from './components/CsvTable';
import Search from './components/Search';
import routes from './routes';

import { getFoodTrucksData } from './api/foodtruck';

import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

import './styles.css';

const router = createBrowserRouter(routes);

function App() {
  // const [foodTrucks, setFoodTrucks] = useState([]);
  // const [searchRes, setSearchRes] = useState(null);

  // useEffect(() => {
  //   getFoodTrucks();
  // }, []);

  // const getFoodTrucks = async () => {
  //   try {
  //     const res = await getFoodTrucksData();
  //     setFoodTrucks(res.data);
  //   } catch(e) {
  //     console.error('Error fetching CSV data: ', e);
  //   };
  // }

  return (
    // <div className="App">
    //   <h1>San Francisco Food Trucks</h1>
    //   <Search onSearch={handleSearch} />
    //   <CsvTable data={searchRes || foodTrucks} />
    //   <Map data={searchRes || foodTrucks} />
    // </div>

    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;