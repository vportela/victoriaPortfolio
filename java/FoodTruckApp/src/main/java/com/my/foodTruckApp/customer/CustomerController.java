package com.my.foodTruckApp.customer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/customers")
    public String createNewCustomer(@RequestBody CustomerRequestBody customerRequestBody) {
        log.info("creating a new customer");
        return customerService.createNewCustomer(customerRequestBody);
    }

    @GetMapping("/customers/{id}")
    public Customer gettingCustomerById(@PathVariable Integer id) {
        return customerService.gettingCustomerById(id);
    }

    @GetMapping("/customers")
    public List<Customer> gettingAllCustomers() {
        return customerService.gettingAllCustomers();
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable Integer id) throws ResponseStatusException {
        customerService.deleteCustomerById(id);
    }
}