package com.my.foodTruckApp.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderRequestBody {
    private Integer customerId;
    private List<Integer> entreeIds;
    private List<Integer> appetizerIds;
}
