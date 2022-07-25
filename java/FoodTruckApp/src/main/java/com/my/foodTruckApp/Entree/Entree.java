package com.my.foodTruckApp.Entree;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Entree {
    private Integer id;
    private String title;
    private String description;
    private Integer price;
}

