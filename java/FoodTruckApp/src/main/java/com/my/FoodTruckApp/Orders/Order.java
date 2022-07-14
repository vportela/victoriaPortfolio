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
    private Integer orderId;
    private List<Entree> entreesOrdered;
    private List<Appetizer> appetizersOrdered;

}

// ToDO: make orders by app or entree id (big task, rlly many small tasks)
