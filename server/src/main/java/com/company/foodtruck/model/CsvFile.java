package com.company.foodtruck.model;

import com.opencsv.bean.CsvBindByName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CsvFile {
    @CsvBindByName(column = "name")
    private String name;

    @CsvBindByName(column = "title")
    private String title;
}
