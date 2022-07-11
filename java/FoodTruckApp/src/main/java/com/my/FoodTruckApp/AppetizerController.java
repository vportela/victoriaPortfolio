package com.my.FoodTruckApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.ValidationUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.xml.validation.Validator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class AppetizerController {

    @Autowired
    private AppetizerService appetizerService;

    @GetMapping("/dependencyInjection")
    public String testingDependencyInjection() {

        return appetizerService.testingService();
    }

    @GetMapping("/appetizers")
        public List<Appetizer> getAppetizers() {
        return appetizerService.getAppetizers();
    }

    //RESTful API, have conventions or patterns.
    //they should return JSON, and recieve JSON
    //use HTTP methods
    // urls should always be plural and they should be about the model you are dealing with
    //so the URL here should be appetizers. It needs to be self-explanatory and related to the model/class.
    @PostMapping("/appetizers")
    public Appetizer createItem(@RequestBody Appetizer requestBody) {
        return appetizerService.createItem(requestBody);
    }

    @GetMapping("/appetizers/{id}")
    public Appetizer getAppetizerById(@PathVariable Integer id) {


        return appetizerService.getAppetizerById(id);
    }

//    //locate the post by the id
//    //remove the post with the matching id
//    //add
//
    @PutMapping("appetizers/{id}")
    public Appetizer changeAppetizer(@RequestBody Appetizer requestBody, @PathVariable Integer id) {

        return appetizerService.changeAppetizer(requestBody, id);
    }

    @PatchMapping("appetizers/{id}")
    public Appetizer changePrice(@RequestBody Appetizer requestBody, @PathVariable Integer id) {
       return appetizerService.changePrice(requestBody,id);
    }

}
