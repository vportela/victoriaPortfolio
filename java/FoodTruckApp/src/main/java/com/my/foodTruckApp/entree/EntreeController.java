package com.my.foodTruckApp.entree;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class EntreeController {

    private final EntreeService entreeService;

    @PostMapping("entrees")
    public Entree createNewEntree(@RequestBody EntreeRequestBody entreeRequestBody) {
        log.info("Creating a new Entree");
        return entreeService.createNewEntree(entreeRequestBody);
    }

    @GetMapping("/entrees/{id}")
    public Entree gettingEntreeById(@PathVariable Integer id) {
        return entreeService.gettingEntreeById(id);
    }
}
