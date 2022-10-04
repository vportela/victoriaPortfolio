package com.my.foodTruckApp.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class NewOrderRequestBody {
    private Integer customerId;
    private Integer entreeIds;
    private Integer appetizerIds;
}
