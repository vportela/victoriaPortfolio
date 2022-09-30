package com.my.foodTruckApp.Appetizer;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppetizerService {
    private final JdbcTemplate jdbcTemplate;
    private final AppetizerRepository appetizerRepository;

    // create

    public Appetizer createNewAppetizer(AppetizerRequestBody appetizerRequestBody) {
        return appetizerRepository.createNewAppetizer(appetizerRequestBody);
    }

    public Appetizer gettingAppetizerById(Integer id) {
        return appetizerRepository.getAppetizerById(id);
    }

    public List<Appetizer> gettingAllAppetizers() {
        return appetizerRepository.getAllAppetizers();
    }

    public void deleteAppetizerById(Integer id) throws ResponseStatusException {
        appetizerRepository.getAppetizerById(id);
        appetizerRepository.deleteAppetizerById(id);
    }

}
