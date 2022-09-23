package com.my.foodTruckApp.Appetizer;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class AppetizerController {

    private final AppetizerService appetizerService;

    @PostMapping("/appetizers")
    public Appetizer createNewAppetizer(@RequestBody AppetizerRequestBody appetizerRequestBody) {
        log.info("Creating a new Appetizer");
        return appetizerService.createNewAppetizer(appetizerRequestBody);
    }
}
