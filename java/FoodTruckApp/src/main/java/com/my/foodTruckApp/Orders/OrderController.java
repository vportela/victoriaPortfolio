package com.my.foodTruckApp.Orders;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private  final OrderService orderService;

    @GetMapping("/orders")
    public List<Order> getListOfOrders() {
        return orderService.getListOfOrders();
    }

    @GetMapping("/orders/{id}")
    public Order getOrderById(@PathVariable Integer id) {
        return orderService.getOrderById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }


    @PostMapping("/orders")
    public Order addNewOrder(@RequestBody NewOrderRequestBody newOrderRequestBody) {
        return orderService.createOrder(newOrderRequestBody);
    }


//    @PatchMapping("/orders/{id}/entrees/{id2}/{id3}")
//    public Order addEntreesToOrder(@RequestBody Order requestBody, @PathVariable Integer id, @PathVariable Integer id2,
//                                   @PathVariable Integer id3) {
//        return orderService.orderEntrees(requestBody, id, id2, id3);
//    }

    //ok what if there was a post mapping for entrees, and a post mapping for appetizers? but they both go
    //into the same order????

    //ToDo: leave the new order alone and start to work on the other ones, for now new order is good enough for
    // working on the next parts of the project.

    //Todo: look into a way to have either unlimited or a long/unreasonable amount of path variables
    // in a way where you don't have to pass in each one manually.

//    @PutMapping("/orders/{id}")
//    public Order changeOrder(@RequestBody Order requestBody, @PathVariable Integer id) {
//        return orderService.changeOrder(requestBody, id);
//    }

    //experiment: an API that creates the blank order, a patch API that adds entrees to the order, and one that
    //adds apps to the order.
    //this will provide some organization even though it seems like it would be ridiculously over-complicated...


}
