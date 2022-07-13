package com.my.FoodTruckApp.Orders;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private  final OrderService orderService;

    @GetMapping("orders")
    public Order getListOfOrders() {
        return orderService.getListOfOrders();
    }
}
