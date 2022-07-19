package com.my.FoodTruckApp.Orders;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@AllArgsConstructor
@Data
public class NewOrderRequestBody {
    private List<Integer> entreeIds;
    private List<Integer> appetizerIds;

}
