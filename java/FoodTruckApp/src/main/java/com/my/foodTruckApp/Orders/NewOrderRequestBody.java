package com.my.foodTruckApp.Orders;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class NewOrderRequestBody {
    private List<Integer> entreeIds;
    private List<Integer> appetizerIds;
}
