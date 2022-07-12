package com.my.FoodTruckApp.Entree;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Entree {
    private Integer id;
    private String size;
    private String flavor;
    private Integer price;
}