package com.my.foodTruckApp.Appetizer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class AppetizerController {

    private final AppetizerService appetizerService;

    @PostMapping("/appetizers")
    public Appetizer createNewAppetizer(@RequestBody AppetizerRequestBody appetizerRequestBody) {
        log.info("Creating a new Appetizer");
        System.out.println("requestbody: " + appetizerRequestBody);
        return appetizerService.createNewAppetizer(appetizerRequestBody);
    }

    @GetMapping("/appetizers/{id}")
    public Appetizer gettingAppetizerById(@PathVariable Integer id) {
        return appetizerService.gettingAppetizerById(id);
    }

    @GetMapping("/appetizers")
    public List<Appetizer> gettingAllAppetizers() {
        return appetizerService.gettingAllAppetizers();
    }
}
