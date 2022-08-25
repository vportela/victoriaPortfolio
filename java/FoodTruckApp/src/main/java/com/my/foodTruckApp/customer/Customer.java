package com.my.foodTruckApp.customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Customer {
    private Integer id;
    private String firstName;
    private String lastName;
}