package com.my.FoodTruckApp.Orders;

import com.my.FoodTruckApp.Appetizer.Appetizer;
import com.my.FoodTruckApp.Entree.Entree;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class OrderRepository {

    Entree entree1 = new Entree(1, "big", "beef", 14);
    Entree entree2 = new Entree(2, "big", "beef", 14);


   ArrayList<Entree> entrees = new ArrayList<>(Arrays.asList(entree1, entree2));
    private List<Appetizer> appetizers;
    Order order1 = new Order(1, entrees, appetizers);

    public Order getListOfOrders() {
        return order1;
    }
}
