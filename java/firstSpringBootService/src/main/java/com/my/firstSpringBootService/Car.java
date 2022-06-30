package com.my.firstSpringBootService;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Car {
    private String model;
    private String make;
    private Integer year;
    private String color;

}
