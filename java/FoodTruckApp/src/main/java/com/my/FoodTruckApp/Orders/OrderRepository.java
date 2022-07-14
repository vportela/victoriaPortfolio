package com.my.FoodTruckApp.Orders;

import com.my.FoodTruckApp.Appetizer.Appetizer;
import com.my.FoodTruckApp.Entree.Entree;
import com.my.FoodTruckApp.Entree.EntreeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Repository
@RequiredArgsConstructor
public class OrderRepository {

    Entree entree1 = new Entree(1, "big", "beef", 14);
    Entree entree2 = new Entree(2, "big", "beef", 14);
    private  final Appetizer appetizer1 = new Appetizer(1,"chicken skewer", "yummy chicken on a stick", 4);

    ArrayList<Entree> entrees = new ArrayList<>(Arrays.asList(entree1, entree2));
    ArrayList<Appetizer> appetizers = new ArrayList<>(Arrays.asList(appetizer1));

    Order order1 = new Order(1, entrees, appetizers);
    Order order2 = new Order(2, entrees, appetizers);
    ArrayList<Order> orders = new ArrayList<>(Arrays.asList(order1, order2));

    public List<Order> getListOfOrders() {
        return orders;
    }


}
