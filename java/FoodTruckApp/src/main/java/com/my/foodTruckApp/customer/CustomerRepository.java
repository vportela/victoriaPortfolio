package com.my.foodTruckApp.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;

@Repository
public class CustomerRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    private final Customer customer1 = new Customer(1,"tom", "bob");
    private final Customer customer2 = new Customer(1,"doggie", "dog");
    ArrayList<Customer> customers = new ArrayList<>(Arrays.asList(customer1, customer2));


    public  ArrayList<Customer> getAllCustomers(){
        return customers;
    }


}