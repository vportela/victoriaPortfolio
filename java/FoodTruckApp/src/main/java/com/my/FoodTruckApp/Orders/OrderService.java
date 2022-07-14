package com.my.FoodTruckApp.Orders;

import com.my.FoodTruckApp.Entree.Entree;
import com.my.FoodTruckApp.Entree.EntreeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final EntreeRepository entreeRepository;

    public List<Order> getListOfOrders() {

        List<Order> orders = orderRepository.getListOfOrders();
        System.out.println("getting orders: " + orders);
        return orders;
    }

    public Optional<Order> getOrderById(@PathVariable Integer id){
        List<Order> orders = orderRepository.getListOfOrders();
        System.out.println("getting order by id: " + id);
        Optional<Order> orderById = orders.stream().filter(order -> order.getOrderId() == id).findFirst();
        return orderById;
    }


    public Order createOrder(@RequestBody Order requestBody) {
        List<Order> orders = orderRepository.getListOfOrders();
        System.out.println("creating a new order with requestbody: " + requestBody);
        Integer id = orders.get(orders.size() - 1).getOrderId() + 1;

        Order order = new Order (
                id,
                requestBody.getEntreesOrdered(),
                requestBody.getAppetizersOrdered()
        );

        orders.add(order);
        return order;
    }
}
