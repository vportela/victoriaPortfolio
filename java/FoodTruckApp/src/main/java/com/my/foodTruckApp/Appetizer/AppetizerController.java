package com.my.foodTruckApp.Appetizer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor // will only use fields that are final (aka being used once)
public class AppetizerController {
//    @Autowired
    private final AppetizerService appetizerService;

//    public AppetizerController(AppetizerService appetizerService) {
//        this.appetizerService = appetizerService;
//    }

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


        return appetizerService.getAppetizerById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
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