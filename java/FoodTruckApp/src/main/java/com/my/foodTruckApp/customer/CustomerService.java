package com.my.foodTruckApp.customer;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final JdbcTemplate jdbcTemplate;
    private final CustomerRepository customerRepository;

    //-------- create new customer ---------

    public String createNewCustomer(CustomerRequestBody customerRequestBody) {
        return customerRepository.createNewCustomer(customerRequestBody);
    }



}