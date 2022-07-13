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

// ToDO: just make order API return something like hello
// ToDO: create fake order to see how it works
// ToDO: return the fake pre loaded order
// ToDO: return two pre loaded orders
// ToDO: get one order by it's id
// ToDO: make orders by app or entree id (big task, rlly many small tasks)
