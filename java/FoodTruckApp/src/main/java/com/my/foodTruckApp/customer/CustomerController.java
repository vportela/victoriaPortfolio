package com.my.foodTruckApp.customer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/customers")
    public String createNewCustomer(@RequestBody CustomerRequestBody customerRequestBody)
    {
        log.info("creating a new customer");
        return customerService.createNewCustomer(customerRequestBody);
    }

    @GetMapping("/customers/{id}")
    public Customer gettingCustomerById(@PathVariable Integer id) {
        return customerService.gettingCustomerById(id);
    }
}