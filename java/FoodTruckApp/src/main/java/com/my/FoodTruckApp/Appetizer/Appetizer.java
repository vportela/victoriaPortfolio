package com.my.FoodTruckApp.Appetizer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Appetizer {

    private Integer id;
    private String title;
    private String description;
    private Integer price;

}
