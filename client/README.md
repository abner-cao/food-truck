# Food Truck (Frontend)

This is the frontend application for the San Francisco Food Truck App. It is built using React and displays food truck data retrieved from the backend server.

## Project Structure

food-truck-app/
├── public/
│   ├── index.html
│   └── foodTruckData.csv
├── src/
│   ├── components/
│   │   └── CsvTable.js
│   │   └── Map.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md

## How to Run

Ensure that Node.js and npm are installed on your system.
Navigate to the food-truck-app directory.
Run npm install to install dependencies.
Run npm start to start the development server.
Open http://localhost:3000 in your browser to view the app.

## Components

### CsvTable
This component fetches food truck data from the backend server and displays it in a table format.

### Map
This component show the food truck location on the mapbox.

## Dependencies

React
ReactDOM