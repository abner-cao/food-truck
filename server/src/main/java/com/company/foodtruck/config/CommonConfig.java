package com.company.foodtruck.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
@Getter
@Setter
public class CommonConfig {
    @Value("${food.truck.csv.filepath}")
    private String csvFile;
}
