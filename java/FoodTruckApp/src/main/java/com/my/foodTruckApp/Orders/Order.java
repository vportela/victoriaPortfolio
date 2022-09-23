package com.my.foodTruckApp.Orders;

import com.my.foodTruckApp.AppetizerNoDb.AppetizerNoDb;
import com.my.foodTruckApp.Entree.Entree;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order {
    private Integer id;
    private List<Entree> entrees;
    private List<AppetizerNoDb> appetizerNoDbs;

}
// ToDo: make the path variables optional
// ToDo: add optional path variables for entrees and appetizers
