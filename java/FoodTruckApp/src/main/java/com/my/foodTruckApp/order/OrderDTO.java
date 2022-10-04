package com.my.foodTruckApp.order;

import com.my.foodTruckApp.Appetizer.Appetizer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderDTO {
    private Integer id;
    private Integer customerId;
    //    private Entree entrees;
    private Appetizer appetizers;
}
