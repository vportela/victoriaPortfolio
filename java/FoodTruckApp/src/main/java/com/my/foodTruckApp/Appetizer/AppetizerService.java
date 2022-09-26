package com.my.foodTruckApp.Appetizer;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppetizerService {
    private final JdbcTemplate jdbcTemplate;
    private final AppetizerRepository appetizerRepository;

    // create

    public creatingNewAppetizer(AppetizerRequestBody appetizerRequestBody) {
        return appetizerRepository.createNewAppetizer(appetizerRequestBody);
    }
}
