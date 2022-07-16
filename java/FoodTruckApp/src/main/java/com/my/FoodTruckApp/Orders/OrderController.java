package com.my.FoodTruckApp.Orders;

import com.my.FoodTruckApp.Entree.Entree;
import com.my.FoodTruckApp.Entree.EntreeId;
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

    @GetMapping("/orders")
    public List<Order> getListOfOrders() {
        return orderService.getListOfOrders();
    }

    @GetMapping("/orders/{id}")
    public Order getOrderById(@PathVariable Integer id) {
        return orderService.getOrderById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/orders/entree")
    public List<Entree> getEntreeThroughRequestBody(@RequestBody EntreeId id) { //if you are getting something by id it should be a path variable not a requestbody
        return orderService.getEntreeThroughRequestBody(id);
    }

    @PostMapping("/orders/{id}/{id2}")
    public Order addNewOrder(@RequestBody  Order requestBody , @PathVariable Integer id , @PathVariable Integer id2) { //you cannot recieve two things from the request body
        return orderService.createOrder(requestBody, id, id2);
    }



}
