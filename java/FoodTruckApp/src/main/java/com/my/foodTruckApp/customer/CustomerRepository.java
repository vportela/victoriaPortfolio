package com.my.foodTruckApp.customer;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomerRepository {

    private final JdbcTemplate jdbcTemplate;

    //-------- create new customer ---------

    public Customer createNewCustomer(CustomerRequestBody customerRequestBody) {
        try {
            String sql = "INSERT INTO customer(first_name,last_name) VALUES(?, ?)";
            Customer customer = jdbcTemplate.queryForObject(
                    sql,
                    new BeanPropertyRowMapper<>(Customer.class),
                    customerRequestBody.getCustomerFirstName(),
                    customerRequestBody.getCustomerLastName()
            );
            return customer;
        } catch (ResponseStatusException responseStatusException) {
            log.info("A new customer has been inserted (REQUEST BODY)");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "customer could not be created"
            );
        }

    }


    //--------- get customer by Id ---------

    public Customer getCustomerById(Integer id) {
        String sql = "SELECT * FROM customer WHERE id = ?";
        try {
            Customer customerById = jdbcTemplate.queryForObject(
                    sql,
                    new BeanPropertyRowMapper<>(Customer.class),
                    id
            );
            return customerById;

        } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
            log.error("No customer found with the id: " + id);
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "No customer found with the id: " + id
            );
        }
    }

    public List<Customer> getAllCustomers() {
        String sql = "SELECT * FROM customer";
        List<Customer> customers = jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(Customer.class)
        );
        return customers;
    }

    public void deleteCustomerById(Integer id) throws ResponseStatusException {

        getCustomerById(id);

        String deleteSql = "DELETE FROM customer WHERE id = ?";
        jdbcTemplate.update(deleteSql, id);
        log.info("deleted customer with id: " + id);
    }
    // ---- find the customer who's id matches the pathVariable id
    // ---- if you cannot retrieve the customer with the matching id
    // ---- they dont exist
    // ---- throw a 404
    //delete the customer by their id
    // if the customer that has that id does not exist


    //throw a 404

}