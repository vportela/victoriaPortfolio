package com.my.FoodTruckApp.Orders;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public Order getListOfOrders() {

        Order orders = orderRepository.getListOfOrders();
        System.out.println("getting orders: " + orders);
        return orders;
    }
}
