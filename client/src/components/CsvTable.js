import React from 'react';

function CsvTable({ data = [], loading = false }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>locationId</th>
            <th>applicant</th>
            <th>facilityType</th>
            <th>cnn</th>
            <th>locationDescription</th>
            <th>address</th>
            <th>blockLot</th>
            <th>block</th>
            <th>lot</th>
            <th>permit</th>
            <th>status</th>
            <th>foodItems</th>
            <th>x</th>
            <th>y</th>
            <th>latitude</th>
            <th>longitude</th>
            <th>schedule</th>
            <th>daysHours</th>
            <th>noiSent</th>
            <th>approved</th>
            <th>received</th>
            <th>priorPermit</th>
            <th>expirationDate</th>
            <th>location</th>
            <th>firePreventionDistricts</th>
            <th>policeDistricts</th>
            <th>supervisorDistricts</th>
            <th>zipCodes</th>
            <th>neighborhoods</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((record) => (
              <tr key={record.locationId}>
                <td>{record.locationId}</td>
                <td>{record.applicant}</td>
                <td>{record.facilityType}</td>
                <td>{record.cnn}</td>
                <td>{record.locationDescription}</td>
                <td>{record.address}</td>
                <td>{record.blockLot}</td>
                <td>{record.block}</td>
                <td>{record.lot}</td>
                <td>{record.permit}</td>
                <td>{record.status}</td>
                <td>{record.foodItems}</td>
                <td>{record.x}</td>
                <td>{record.y}</td>
                <td>{record.latitude}</td>
                <td>{record.longitude}</td>
                <td>{record.schedule}</td>
                <td>{record.daysHours}</td>
                <td>{record.noiSent}</td>
                <td>{record.approved}</td>
                <td>{record.received}</td>
                <td>{record.priorPermit}</td>
                <td>{record.expirationDate}</td>
                <td>{record.location}</td>
                <td>{record.firePreventionDistricts}</td>
                <td>{record.policeDistricts}</td>
                <td>{record.supervisorDistricts}</td>
                <td>{record.zipCodes}</td>
                <td>{record.neighborhoods}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default CsvTable;