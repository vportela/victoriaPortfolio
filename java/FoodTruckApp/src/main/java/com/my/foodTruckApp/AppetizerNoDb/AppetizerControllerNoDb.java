package com.my.foodTruckApp.AppetizerNoDb;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor // will only use fields that are final (aka being used once)
public class AppetizerControllerNoDb {
    //    @Autowired
    private final AppetizerServiceNoDb appetizerServiceNoDb;

//    public AppetizerController(AppetizerService appetizerService) {
//        this.appetizerService = appetizerService;
//    }

    @GetMapping("/appetizers")
    public List<AppetizerNoDb> getAppetizers() {
        return appetizerServiceNoDb.getAppetizers();
    }

    //RESTful API, have conventions or patterns.
    //they should return JSON, and recieve JSON
    //use HTTP methods
    // urls should always be plural and they should be about the model you are dealing with
    //so the URL here should be appetizers. It needs to be self-explanatory and related to the model/class.
    @PostMapping("/appetizers")
    public AppetizerNoDb createItem(@RequestBody AppetizerNoDb requestBody) {

        return appetizerServiceNoDb.createItem(requestBody);
    }

    @GetMapping("/appetizers/{id}")
    public AppetizerNoDb getAppetizerById(@PathVariable Integer id) {


        return appetizerServiceNoDb.getAppetizerById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //    //locate the post by the id
//    //remove the post with the matching id
//    //add
//
    @PutMapping("appetizers/{id}")
    public AppetizerNoDb changeAppetizer(@RequestBody AppetizerNoDb requestBody, @PathVariable Integer id) {

        return appetizerServiceNoDb.changeAppetizer(requestBody, id);
    }

    @PatchMapping("appetizers/{id}")
    public AppetizerNoDb changePrice(@RequestBody AppetizerNoDb requestBody, @PathVariable Integer id) {
        return appetizerServiceNoDb.changePrice(requestBody, id);
    }

}
