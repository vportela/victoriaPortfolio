package com.my.foodTruckApp.customer;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final JdbcTemplate jdbcTemplate;
    private final CustomerRepository customerRepository;

    //-------- create new customer ---------

    public String createNewCustomer(CustomerRequestBody customerRequestBody) {
        return customerRepository.createNewCustomer(customerRequestBody);
    }

    //------------- get customer by id -----------

    public Customer gettingCustomerById(Integer id) {
        return customerRepository.getCustomerById(id);
    }

    //-------------- get all customers ----------------

    public List<Customer> gettingAllCustomers() {
        return customerRepository.getAllCustomers();
    }

    //------------ delete customer by id -------------

    public void deleteCustomerById(Integer id) throws ResponseStatusException {
        customerRepository.deleteCustomerById(id);
    }
}