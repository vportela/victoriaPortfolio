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

//        ValidationUtils.rejectIfEmpty();
        if (optionalAppetizerById.isPresent()) {
            Appetizer foundAppetizer = optionalAppetizerById.get();
            foundAppetizer.setPrice(requestBody.getPrice());
            foundAppetizer.setDescription(requestBody.getDescription());
            foundAppetizer.setTitle(requestBody.getTitle());

            if(requestBody.getPrice() == null) {
                System.out.println("price is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            } if (requestBody.getDescription() == null) {
                System.out.println("description is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            } if (requestBody.getTitle() == null) {
                System.out.println("title is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }

            // trying to return the found appetizer with all of the allowed fields updated
            return foundAppetizer;
        } //if the Optional does not exist, throw the error code not found.
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        //if a field is missing from the new data, throw an exception.
        //how do you know if a field is missing? -- it is null

        //possible option, if you have a "safe appetizer" type of thing that only gives access to the fields you
        //want to be able to change, and then if the arguments don't match, you throw the exception.


    }

    @PatchMapping("appetizers/{id}")
    public Appetizer changePrice(@RequestBody Appetizer requestBody, @PathVariable Integer id) {
        //find app by it's id
        Optional<Appetizer> optionalAppetizerById = appetizers.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();
        //change optional appetizer into just Appetizer so you can set things.
        if (optionalAppetizerById.isPresent()) {
            Appetizer foundAppetizer = optionalAppetizerById.get();

            // trying to return the found appetizer with the updated price

            if(requestBody.getPrice() == null) {
                System.out.println("found app before set price" + foundAppetizer);
                return foundAppetizer;
            } foundAppetizer.setPrice(requestBody.getPrice());
            System.out.println("found app after set price" + foundAppetizer);

            //this way doesnt work because if this if statement returns, it stops.
            // if it runs the else (aka makes the change), it continues to the next if statement because
            //there was technically no return, but then it will stop once that one returns something.

            if(requestBody.getTitle() == null) {
                System.out.println("title before change" + foundAppetizer);
                return foundAppetizer;
            } foundAppetizer.setTitle(requestBody.getTitle());
            System.out.println("title after change" + foundAppetizer);

//            if(requestBody.getDescription() == null) {
//                System.out.println("title before change" + foundAppetizer);
//                return foundAppetizer;
//            } foundAppetizer.setDescription(requestBody.getDescription());
//            System.out.println("title after change" + foundAppetizer);

            return foundAppetizer;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

}
