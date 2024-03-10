import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import CsvTable from './components/CsvTable';

// import { getFoodTrucksData } from 'api/foodTruck';

import './styles.css';

function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    getFoodTrucks();
  }, []);

  const getFoodTrucks = async () => {
    try {
      // const res = await getFoodTrucksData();
      res.data = [];
      res.data.push({
        locationId: 735318,
        applicant: 'Ziaurehman'
      })
      setFoodTrucks(res.data);
    } catch(e) {
      console.error('Error fetching CSV data: ', e);
    };
  }

  return (
    <div className="App">
      <h1>San Francisco Food Trucks</h1>
      <CsvTable data={foodTrucks} />
      <Map data={foodTrucks} />
    </div>
  );
}

export default App;