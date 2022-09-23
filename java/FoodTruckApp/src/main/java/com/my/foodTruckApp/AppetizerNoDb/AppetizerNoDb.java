package com.my.foodTruckApp.AppetizerNoDb;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AppetizerNoDb {

    private Integer id;
    private String title;
    private String description;
    private Integer price;

}
