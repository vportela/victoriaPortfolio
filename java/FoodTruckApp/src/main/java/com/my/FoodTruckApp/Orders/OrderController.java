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

    @PostMapping("/orders/{id}/{id2}/{id3}") //this like sort of works but is limited in how useful it is.
    public Order addNewOrder(@RequestBody  Order requestBody , @PathVariable Integer id , @PathVariable Integer id2,
                             @PathVariable Integer id3) { //you cannot recieve two things from the request body
        return orderService.createOrder(requestBody, id, id2, id3);
    }

    @PostMapping("/orders/blank") //creating a blank order to fill with patches later on (also not a great solution)
    public Order addNewBlankOrder(@RequestBody  Order requestBody) {
        return orderService.createBlankOrder(requestBody);
    }

    @PatchMapping("/orders/{id}/entrees/{id2}/{id3}")
    public Order addEntreesToOrder(@RequestBody Order requestBody, @PathVariable Integer id, @PathVariable Integer id2,
                                   @PathVariable Integer id3) {
        return orderService.orderEntrees(requestBody, id, id2, id3);
    }

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
