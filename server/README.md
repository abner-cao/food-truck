# Food Truck (Backend)

This is the backend application for the San Francisco Food Truck App. It is built using Spring Boot and provides API endpoints to fetch food truck data from a CSV file.

## Project Structure

food-truck-server/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── yourcompany/
│   │   │           └── foodtruck/
│   │   │               ├── FoodTruckApplication.java
│   │   │               ├── controller/
│   │   │               │   └── CsvController.java
│   │   │               └── model/
│   │   │                   └── CsvRecord.java
│   │   └── resources/
│   │       └── application.properties
├── pom.xml
└── README.md

## How to Run

Ensure that Java and Maven are installed on your system.
Navigate to the food-truck-server directory.
Run mvn spring-boot:run to start the Spring Boot server.
The server will start at http://localhost:8080.

## API Endpoints

/api/csv/records: GET endpoint to fetch food truck records from the CSV file.

## Components

### CsvController

This controller provides API endpoints to fetch food truck data from the CSV file.

### CsvRecord

This class represents a record in the CSV file, containing information about a food truck.

## Dependencies

Spring Boot
Spring Web