package com.my.foodTruckApp.customer;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomerRepository {

    private final JdbcTemplate jdbcTemplate;

    //-------- create new customer ---------

    public String createNewCustomer(CustomerRequestBody customerRequestBody) {
        String sql = "INSERT INTO customer(first_name,last_name) VALUES(?, ?)";
        Integer rows = jdbcTemplate.update(sql, customerRequestBody.getCustomerFirstName(), customerRequestBody.getCustomerLastName());
        if(rows > 0) {
            log.info("A new customer has been inserted (REQUEST BODY)");
        }
        return "CREATING A CUSTOMER WORKED";
    }

    //--------- get customer by Id ---------

    public Customer getCustomerById(Integer id) {
        Customer Sql = "SELECT * FROM customer WHERE id = ?";
        try {
            Customer customerById =
                jdbcTemplate.queryForObject
                    (
                        sql,
                        new BeanPropertyRowMapper<>(Customer.class),
                        id
                    );
            return customerById;

        } catch ()
    }
}