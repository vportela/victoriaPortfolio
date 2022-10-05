package com.my.foodTruckApp.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class OrderController {
    private final OrderService orderService;


    @PostMapping("/orders")
    public OrderDTO createOrder(@RequestBody NewOrderRequestBody newOrderRequestBody) {
        log.info("Creating an order with orderRequestBody: " + newOrderRequestBody);
        return orderService.createOrder(newOrderRequestBody);
    }

}
