package com.company.foodtruck.controller;

import com.company.foodtruck.config.CommonConfig;
import com.company.foodtruck.model.CsvRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CsvController {
    @Autowired
    private CommonConfig config;

    @GetMapping("/csvData")
    public List<CsvRecord> getCsvData(@RequestParam String csvFilePath) {
        List<CsvRecord> csvData = new ArrayList<>();
//        String csvFilePath = "/path/to/your/csv/file.csv";
        try (BufferedReader br = new BufferedReader(new FileReader(csvFilePath))) {
            // Read the header (field names) from the first line
            String[] header = br.readLine().split(",");
            String line;
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                CsvRecord record = new CsvRecord();
                for (int i = 0; i < header.length; i++) {
                    switch (header[i]) {
                        case "locationid":
                            record.setLocationId(data[i]);
                            break;
                        case "Applicant":
                            record.setApplicant(data[i]);
                            break;
                        case "FacilityType":
                            record.setFacilityType(data[i]);
                            break;
                        // Add more cases for other fields if needed
                    }
                }
                csvData.add(record);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return csvData;
    }

    @GetMapping("/foodtrucks")
    public List<CsvRecord> getFoodTrucks(@RequestParam String filePath) throws IOException {

        String line = "";
        String csvSplitSymbol = ",";

        List<CsvRecord> foodTrucks = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            // Skip header line
            br.readLine();

            while ((line = br.readLine()) != null) {
                // Split CSV line by comma
                String[] data = line.split(csvSplitSymbol);

                // Create FoodTruck object from CSV data
                CsvRecord foodTruck = CsvRecord.builder()
                        .locationId(data[0])
                        .applicant(data[1])
                        .facilityType(data[2])
                        .cnn(data[3])
                        .locationDescription(data[4])
                        .address(data[5])
                        .blockLot(data[6])
                        .block(data[7])
                        .lot(data[8])
                        .permit(data[9])
                        .status(data[10])
                        .foodItems(data[11])
                        .x(data[12])
                        .y(data[13])
                        .latitude(data[14])
                        .longitude(data[15])
                        .schedule(data[16])
                        .daysHours(data[17])
                        .noiSent(data[18])
                        .approved(data[19])
                        .received(data[20])
                        .priorPermit(data[21])
                        .expirationDate(data[22])
                        .location(data[23])
                        .firePreventionDistricts(data[24])
                        .policeDistricts(data[25])
                        .supervisorDistricts(data[26])
                        .zipCodes(data[27])
                        .neighborhoods(data[28])
                        .build();

                foodTrucks.add(foodTruck);
            }
        } catch (IOException io) {
            io.printStackTrace();
        }

        return foodTrucks;
    }
}

