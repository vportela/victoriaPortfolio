package com.my.foodTruckApp.Orders;

import com.my.foodTruckApp.Appetizer.AppetizerService;
import com.my.foodTruckApp.Entree.Entree;
import com.my.foodTruckApp.Entree.EntreeRepository;
import com.my.foodTruckApp.Entree.EntreeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final EntreeRepository entreeRepository;
    private final EntreeService entreeService;

    private final AppetizerService appetizerService;

    public List<Order> getListOfOrders() {

        List<Order> orders = orderRepository.getListOfOrders();
        System.out.println("getting orders: " + orders);
        return orders;
    }

    public Optional<Order> getOrderById(Integer id){
        List<Order> orders = orderRepository.getListOfOrders();
        System.out.println("getting order by id: " + id);
        Optional<Order> orderById = orders.stream().filter(order -> order.getId() == id).findFirst();
        return orderById;
    }

    public Order createOrder(NewOrderRequestBody newOrderRequestBody ) {
        List<Order> orders = orderRepository.getListOfOrders();
        System.out.println("creating a new order with requestbody: " + newOrderRequestBody);
        Integer orderId = orders.get(orders.size() - 1).getId() + 1;

        List<Integer> entrees = newOrderRequestBody.getEntreeIds();
        //for each entree in the request body, get the entree by it's id.
//        entreeService.getEntreeById(entrees);

        //using the ids passed in through the request body, find the entrees.

//        Optional<Entree> entree = entreeService.getEntreeById(id2);
//        Optional<Entree> entree2 = entreeService.getEntreeById(id3);
//        Optional<Appetizer> appetizer = appetizerService.getAppetizerById(id);

//        newOrderRequestBody.getAppetizerIds();

//        if (entree.isPresent() && appetizer.isPresent()) {
//            Entree foundEntreeByRequestId = entree.get();
//            Entree foundEntreeByRequestId2 = entree2.get();
//            Appetizer foundAppetizerByRequestId = appetizer.get();
//            ArrayList<Entree> foundEntreeById = new ArrayList<>(Arrays.asList(foundEntreeByRequestId, foundEntreeByRequestId2));
//            ArrayList<Appetizer> foundAppetizerById = new ArrayList<>(Arrays.asList(foundAppetizerByRequestId));
//
//            Order order = new Order (
//                    orderId,
//                    foundEntreeById,
//                    foundAppetizerById
//            );
//            orders.add(order);
//            return order;
//        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }


//    public Order changeOrder(@RequestBody Order requestBody, @PathVariable Integer id) {
//        Optional<Order> optionalOrders = getOrderById(id);
//
//        if(optionalOrders.isPresent()) {
//            Order foundOrder = optionalOrders.get();
//            if (requestBody.getEntrees() == null) {
//                System.out.println("before change: " + foundOrder);
//                return foundOrder;
//            }
//        }
//        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//
//    }

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
