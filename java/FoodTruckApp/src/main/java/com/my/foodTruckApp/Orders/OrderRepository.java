package com.my.foodTruckApp.Orders;

import com.my.foodTruckApp.AppetizerNoDb.AppetizerNoDb;
import com.my.foodTruckApp.Entree.Entree;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Repository
@RequiredArgsConstructor
public class OrderRepository {

    Entree entree1 = new Entree(1, "big", "beef", 14);
    Entree entree2 = new Entree(2, "big", "beef", 14);
    private final AppetizerNoDb appetizerNoDb1 = new AppetizerNoDb(1, "chicken skewer", "yummy chicken on a stick", 4);

    ArrayList<Entree> entrees = new ArrayList<>(Arrays.asList(entree1, entree2));
    ArrayList<AppetizerNoDb> appetizerNoDbs = new ArrayList<>(Arrays.asList(appetizerNoDb1));

    Order order1 = new Order(1, entrees, appetizerNoDbs);
    Order order2 = new Order(2, entrees, appetizerNoDbs);
    ArrayList<Order> orders = new ArrayList<>(Arrays.asList(order1, order2));

    public List<Order> getListOfOrders() {
        return orders;
    }


}
