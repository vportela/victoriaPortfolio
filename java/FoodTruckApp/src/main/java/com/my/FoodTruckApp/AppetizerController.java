package com.my.FoodTruckApp;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class AppetizerController {

    private  final Appetizer appetizer1 = new Appetizer(1,"chicken skewer", "yummy chicken on a stick", 4);
    private  final Appetizer appetizer2 = new Appetizer(2,"pork taco", "Delicious little pocket of pork joy", 8);
    ArrayList<Appetizer> appetizers = new ArrayList<>(Arrays.asList(appetizer1,appetizer2));

    @GetMapping("/menu")
        public List<Appetizer> getAppetizers() {
        System.out.println("getting the appetizer menu" + appetizers);

        return appetizers;
    }


    @PostMapping("/menu")
    public Appetizer createItem(@RequestBody Appetizer requestBody) {
        System.out.println("creating an appetizer with requestBody: " + requestBody);

        return requestBody;
    }

    @GetMapping("/menu/{id}")
    public Appetizer getAppetizerById(@PathVariable Integer id) {
        System.out.println("Getting appetizer by id: " + id);

        Optional<Appetizer> appetizerById = appetizers.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();

        return appetizerById.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //locate the post by the id
    //remove the post with the matching id
    //add

    @PutMapping("menu/{id}")
    public Appetizer changePrice(@RequestBody Appetizer requestBody, @PathVariable Integer id) {

//        Optional<Appetizer> appetizerById = appetizers.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();
        Appetizer appetizerDetails = appetizers.get(id);
        appetizerDetails.setPrice(requestBody.getPrice());

        return appetizerDetails;

    }

}
