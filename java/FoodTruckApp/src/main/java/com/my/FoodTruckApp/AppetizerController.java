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

    private  final Appetizer appetizer3 = new Appetizer(3,"pork taco", "Delicious little pocket of pork joy", 8);
    ArrayList<Appetizer> appetizers = new ArrayList<>(Arrays.asList(appetizer1,appetizer2, appetizer3));

    @GetMapping("/menu")
        public List<Appetizer> getAppetizers() {
        System.out.println("getting the appetizer menu" + appetizers);

        return appetizers;
    }
// ToDo: change put to allow you to change all fields except for id.
    // ToDo: create a patch that lets you change a specific field.
    //ToDo: make sure that your URLS make more sense with your model/class.
    //ToDo: make sure your POST api is actually adding your new items to the list of objects.
    //ToDo: PUT should require you to update the entire object, not just a field.
    //RESTful API, have conventions or patterns.
    //they should return JSON, and recieve JSON
    //use HTTP methods
    // urls should always be plural and they should be about the model you are dealing with
    //so the URL here should be appetizers. It needs to be self-explanatory and related to the model/class.
    @PostMapping("/menu")
    public Appetizer createItem(@RequestBody Appetizer requestBody) {
        System.out.println("creating an appetizer with requestBody: " + requestBody);
        //add this new appetizer to the appetizers ArrayList<Appetizer>


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

        Optional<Appetizer> optionalAppetizerById = appetizers.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();

        if (optionalAppetizerById.isPresent()) {
            Appetizer foundAppetizer = optionalAppetizerById.get();
            foundAppetizer.setPrice(requestBody.getPrice());
            // trying to return the found appetizer with the updated price
            return foundAppetizer;
        } //if the Optional does not exist, throw the error code not found.
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);

    }

}
