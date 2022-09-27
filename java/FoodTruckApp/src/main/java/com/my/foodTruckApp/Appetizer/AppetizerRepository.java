package com.my.foodTruckApp.Appetizer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AppetizerRepository {

    private final JdbcTemplate jdbcTemplate;

    // create

    public Appetizer createNewAppetizer(AppetizerRequestBody appetizerRequestBody) {
        String newAppetizerSql = "INSERT INTO appetizer(name,price) VALUES(?, ?) returning *";
        Appetizer newAppetizer = jdbcTemplate.queryForObject(
                newAppetizerSql,
                new BeanPropertyRowMapper<>(Appetizer.class),
                appetizerRequestBody.getName(),
                appetizerRequestBody.getPrice()
        );
        System.out.println("REQUEST BODY (repository): " + appetizerRequestBody);

        return newAppetizer;
    }
}
