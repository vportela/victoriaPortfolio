package com.my.foodTruckApp.order;

import com.my.foodTruckApp.Appetizer.AppetizerRepository;
import com.my.foodTruckApp.entree.EntreeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final EntreeRepository entreeRepository;
    private final AppetizerRepository appetizerRepository;
    private final OrderRepository orderRepository;

    public ArrayList<Order> getListOfOrders() {
        return orderRepository.getListOfOrders();
    }
}
