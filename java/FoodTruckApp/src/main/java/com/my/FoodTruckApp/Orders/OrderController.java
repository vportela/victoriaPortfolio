package com.my.FoodTruckApp.Orders;

import com.my.FoodTruckApp.Entree.Entree;
import com.my.FoodTruckApp.Entree.EntreeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private  final OrderService orderService;
    private final EntreeService entreeService;

    @GetMapping("orders")
    public List<Order> getListOfOrders() {
        return orderService.getListOfOrders();
    }

    @GetMapping("orders/{id}")
    public Order getOrderById(@PathVariable Integer id) {
        return orderService.getOrderById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("orders/entree")
    public Entree getEntreeThroughRequestBody(@RequestBody Integer id) {
        return orderService.getEntreeThroughRequestBody(id);
    }

    @PostMapping("orders")
    public Order addNewOrder(@RequestBody Order requestBody) {
        return orderService.createOrder(requestBody);
    }


}
