package com.my.foodTruckApp.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
@Slf4j
public class OrderController {
    private final OrderService orderService;

    @GetMapping("/orders")
    public ArrayList<Order> getListOfOrders() {
        return orderService.getListOfOrders();
    }

    @PostMapping("/orders")
    public OrderDto createOrder(@RequestBody OrderRequestBody orderRequestBody) {
        log.info("Creating an order with orderRequestBody: " + orderRequestBody);
        return orderService.createOrder(orderRequestBody);
    }

    @GetMapping("/orders/{orderId}")
    public OrderDTO getOrderById(@PathVariable Integer orderId) {
        log.info("Finding an order with PathVariable Integer Id: " + orderId);
        return orderService.getOrderById(orderId);
    }
}
