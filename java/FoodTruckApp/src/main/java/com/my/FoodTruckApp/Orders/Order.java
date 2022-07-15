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
//ToDo: orderId should just read as ID, entreesOrdered should just say ordered. because you write entree.entreesOrdered
// which is redundant. just write Id or ordered etc.
// ToDO: make orders by app or entree id (big task, rlly many small tasks)
