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

    private  final Appetizer appetizer3 = new Appetizer(3,"mango pie", "hot mango pie", 70);
    ArrayList<Appetizer> appetizers = new ArrayList<>(Arrays.asList(appetizer1,appetizer2, appetizer3));

    @GetMapping("/appetizers")
        public List<Appetizer> getAppetizers() {
        System.out.println("getting the appetizer menu" + appetizers);

        return appetizers;
    }

    //RESTful API, have conventions or patterns.
    //they should return JSON, and recieve JSON
    //use HTTP methods
    // urls should always be plural and they should be about the model you are dealing with
    //so the URL here should be appetizers. It needs to be self-explanatory and related to the model/class.
    @PostMapping("/appetizers")
    public Appetizer createItem(@RequestBody Appetizer requestBody) {
        System.out.println("creating an appetizer with requestBody: " + requestBody);
        //add this new appetizer to the appetizers ArrayList<Appetizer>
        Integer id = appetizers.get(appetizers.size() - 1).getId() + 1;

        Appetizer appetizer = new Appetizer(
                id,
                requestBody.getTitle(),
                requestBody.getDescription(),
                requestBody.getPrice()
        );
        appetizers.add(appetizer);
        return appetizer;
    }

    @GetMapping("/appetizers/{id}")
    public Appetizer getAppetizerById(@PathVariable Integer id) {
        System.out.println("Getting appetizer by id: " + id);

        Optional<Appetizer> appetizerById = appetizers.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();

        return appetizerById.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //locate the post by the id
    //remove the post with the matching id
    //add

    @PutMapping("appetizers/{id}")
    public Appetizer changeAppetizer(@RequestBody Appetizer requestBody, @PathVariable Integer id) {

        Optional<Appetizer> optionalAppetizerById = appetizers.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();

        if (optionalAppetizerById.isPresent()) {
            Appetizer foundAppetizer = optionalAppetizerById.get();
            foundAppetizer.setPrice(requestBody.getPrice());
            foundAppetizer.setDescription(requestBody.getDescription());
            foundAppetizer.setTitle(requestBody.getTitle());
            // trying to return the found appetizer with all of the allowed fields updated
            return foundAppetizer;
        } //if the Optional does not exist, throw the error code not found.
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @PatchMapping("appetizers/{id}")
    public Appetizer changePrice(@RequestBody Appetizer requestBody, @PathVariable Integer id) {
        //find app by it's id
        Optional<Appetizer> optionalAppetizerById = appetizers.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();
        //change optional appetizer into just Appetizer so you can set things.
        if (optionalAppetizerById.isPresent()) {
            Appetizer foundAppetizer = optionalAppetizerById.get();
            foundAppetizer.setPrice(requestBody.getPrice());
            // trying to return the found appetizer with the updated price
            return foundAppetizer;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

}
