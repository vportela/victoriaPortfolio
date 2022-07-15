package com.my.FoodTruckApp.Orders;

import com.my.FoodTruckApp.Entree.Entree;
import com.my.FoodTruckApp.Entree.EntreeId;
import com.my.FoodTruckApp.Entree.EntreeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

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

//figure out how to request an entree through the request body.

    public Entree getEntreeThroughRequestBody(@RequestBody EntreeId id) {
        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();
        Optional<Entree> optionalEntreeById = entrees.stream().filter(entree -> entree.getId() == id.getEntreeIdField()).findFirst();

        if (optionalEntreeById.isPresent()) {
            Entree foundEntreeByRequestId = optionalEntreeById.get();
            return foundEntreeByRequestId;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }


    public Order createOrder(@RequestBody Order requestBody) {
        List<Order> orders = orderRepository.getListOfOrders();
        System.out.println("creating a new order with requestbody: " + requestBody);
        Integer id = orders.get(orders.size() - 1).getOrderId() + 1;

        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();
        Optional<Entree> optionalEntreeById = entrees.stream().filter(entree -> entree.getId() == id).findFirst();

//        if(optionalEntreeById.isPresent()) {
//            Entree found
//
//        }

        Order order = new Order (
                id,
                requestBody.getEntreesOrdered(),
                requestBody.getAppetizersOrdered()
        );

        orders.add(order);
        return order;
    }

//    public void deleteOrderById(@PathVariable Integer id) {
//        List<Order> listOfOrders =  orderRepository.getListOfOrders();
//        System.out.println("Deleting order: " + id);
//        if(
//                listOfOrders.removeIf(order -> order.getOrderId().equals(id));
//        ) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//    }

    //ToDo: was trying to get new order to grab an entree by its id but that doesnt make a lot of sense.
    //ToDo: was able to post a new order with hard coded entrees and apps.
    //ToDo: next major thing is to be able to create a new order that you pass an entree Id into and it gets
    // the object and adds it to the list of entrees.
}
