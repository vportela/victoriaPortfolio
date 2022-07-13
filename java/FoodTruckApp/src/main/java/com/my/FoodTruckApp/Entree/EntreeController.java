package com.my.FoodTruckApp.Entree;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.ArrayList;


@RestController
@RequiredArgsConstructor
public class EntreeController {

    private final EntreeService entreeService;

    @GetMapping("/entrees")
    public ArrayList<Entree> getListOfEntrees() {
        return entreeService.getListOfEntrees();
    }

    //--------------------------CREATE ENTREE-------------------------------
    @PostMapping("/entrees")
    public Entree createEntree(@RequestBody EntreeRequestBody requestBody) {
        return entreeService.createEntree(requestBody);
    }
    //------------------------ENTREE BY ID------------------------------
    @GetMapping("/entrees/{id}")
    public Entree getEntreeById(@PathVariable Integer id) {
        return entreeService.getEntreeById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    //------------------------PUTMAPPING------------------------------
    @PutMapping("/entrees/{id}")
    public Entree changeObject(@RequestBody Entree requestBody, @PathVariable Integer id) {
        return entreeService.changeObject(requestBody, id);
    }
    //------------------------PATCHMAPPING-----------------------------------
    @PatchMapping("/entrees/{id}")
    public Entree changeField(@RequestBody Entree requestBody, @PathVariable Integer id) {
        return entreeService.changeField(requestBody, id);
    }

    @DeleteMapping("/entrees/{id}")
    public void deleteField(@RequestBody Entree requestBody, @PathVariable Integer id) {
        entreeService.deleteField(requestBody, id);
    }
}