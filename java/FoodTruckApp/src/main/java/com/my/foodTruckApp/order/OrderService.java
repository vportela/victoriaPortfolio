package com.my.foodTruckApp.order;

import com.my.foodTruckApp.Appetizer.Appetizer;
import com.my.foodTruckApp.Appetizer.AppetizerRepository;
import com.my.foodTruckApp.entree.Entree;
import com.my.foodTruckApp.entree.EntreeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final EntreeRepository entreeRepository;
    private final AppetizerRepository appetizerRepository;
    private final OrderRepository orderRepository;

    public OrderDTO createOrder(NewOrderRequestBody newOrderRequestBody) {
        Order newOrder = orderRepository.createOrder(newOrderRequestBody);

        entreeRepository.createEntreeOrder(newOrder.getId(), newOrderRequestBody.getEntreeId());
        Entree entree = entreeRepository.getEntreeById(newOrderRequestBody.getEntreeId());
        appetizerRepository.createAppetizerOrder(newOrder.getId(), newOrderRequestBody.getAppetizerId());
        Appetizer appetizer = appetizerRepository.getAppetizerById(newOrderRequestBody.getAppetizerId());

        return new OrderDTO(
                newOrder.getId(),
                newOrderRequestBody.getCustomerId(),
                entree,
                appetizer
        );
    }
}
