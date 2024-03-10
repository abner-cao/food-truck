@SpringBootApplication
public class FoodTrackApplication {

    public static void main(String[] args) {
        SpringApplication.run(FoodTrackApplication.class, args);
    }

    @RestController
    public static class CsvController {

        @GetMapping("/csvData")
        public List<CsvRecord> getCsvData() {
            List<CsvRecord> csvData = new ArrayList<>();
            String csvFilePath = "/path/to/your/csv/file.csv";
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
    }
}