package com.my.FoodTruckApp.Orders;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private  final OrderService orderService;

}
