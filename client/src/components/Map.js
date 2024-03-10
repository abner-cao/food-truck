import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function Map(foodTrucks) {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
  });
  const [selectedFoodTruck, setSelectFoodTruck] = useState(null);

  // pk.eyJ1Ijoicm95Y2VtYXJ0aW4iLCJhIjoiY2wzODk0bmp3MDc4YjNpbnphNzRzODR1YSJ9.peCCwkWoX_RHseUf2WI1Xw
  // pk.eyJ1IjoicHJha2hhciIsImEiOiJjaWZlbzQ1M2I3Nmt2cnhrbnlxcTQyN3VkIn0.uOaUAUqN2VS7dC7XKS0KkQ
  // pk.eyJ1IjoieWFuZ2ppYW4iLCJhIjoiY2phaG1neno0MXFkNDMzbWhwNWw0bWM4aiJ9.CFmrh0LVWAbmVeed-Xr7wA
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1Ijoicm95Y2VtYXJ0aW4iLCJhIjoiY2wzODk0bmp3MDc4YjNpbnphNzRzODR1YSJ9.peCCwkWoX_RHseUf2WI1Xw"
      onViewportChange={newViewport => setViewport(newViewport)}
    >
      {
        foodTrucks.map((foodTruck) => (
          <Marker>
            <button className="marker-btn" onClick={e => {
              e.preventDefault();
              setSelectFoodTruck(foodTruck);
            }}>
              <img src="" alt="Food Truck Icon" />
            </button>
          </Marker>
        ))
      }
      {
        selectedFoodTruck && (
          <Popup
            latitude={selectedFoodTruck.latitude}
            longitude={selectedFoodTruck.longitude}
            onClose={() => setSelectFoodTruck(null)}
          >
              <div>
                <h4>{selectedFoodTruck.applicant}</h4>
                <p>{selectedFoodTruck.address}</p>
              </div>
            </Popup>
        )
      }
    </ReactMapGL>
  )
}

export default Map;