package com.my.FoodTruckApp.Orders;

import com.my.FoodTruckApp.Appetizer.Appetizer;
import com.my.FoodTruckApp.Entree.Entree;
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
    private List<Appetizer> appetizers;

}
// ToDo: make the path variables optional
// ToDo: add optional path variables for entrees and appetizers
