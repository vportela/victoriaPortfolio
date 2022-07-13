package com.my.FoodTruckApp.Entree;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class EntreeRequestBody {
    private String entreeSize;
    private String entreeFlavor;
    private Integer entreePrice;
}