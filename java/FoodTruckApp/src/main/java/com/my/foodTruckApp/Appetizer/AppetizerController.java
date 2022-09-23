package com.my.foodTruckApp.Appetizer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class AppetizerController {

    private final AppetizerService appetizerService;

    @PostMapping("/appetizers")
    public Appetizer creatingNewAppetizer(@RequestBody AppetizerRequestBody appetizerRequestBody) {
        log.info("Creating a new Appetizer");
        return appetizerService.createNewAppetizer(appetizerRequestBody);
    }
}
