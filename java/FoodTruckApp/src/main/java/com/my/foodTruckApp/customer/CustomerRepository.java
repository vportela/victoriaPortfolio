package com.my.foodTruckApp.customer;


import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class CustomerRepository {

    private final JdbcTemplate jdbcTemplate;

    //-------- create new customer ---------

    public String createNewCustomer(@RequestBody CustomerRequestBody customerRequestBody) {
        String sql = "INSERT INTO customer(first_name,last_name) VALUES(?, ?)";
        Integer rows = jdbcTemplate.update(sql, customerRequestBody.getCustomerFirstName(), customerRequestBody.getCustomerLastName());
        if(rows > 0) {
            System.out.println("A new customer has been inserted (REQUEST BODY)");
        }
        return "CREATING A CUSTOMER WORKED";
    }

}