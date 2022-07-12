package com.my.FoodTruckApp.Entree;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;
import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EntreeService {

    private final EntreeRepository entreeRepository;

    //---------------------------------------------------------------------------------------------------------------------------------
    public ArrayList<Entree> getListOfEntrees() {
        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();
        System.out.println("These are the entrees: " + entrees);
        return entrees;
    }
    //---------------------------------------------------------------------------------------------------------------------------------
    public Entree createEntree(@RequestBody EntreeRequestBody entreeRequestBody) {
        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();
        System.out.println("Creating an entree with requestBody: " + entreeRequestBody);
        Integer id = entrees.get(entrees.size() - 1).getId() + 1;

        Entree entree = new Entree(
                id,
                entreeRequestBody.getEntreeSize(),
                entreeRequestBody.getEntreeFlavor(),
                entreeRequestBody.getEntreePrice()
        );
        entrees.add(entree);
        return entree;
    }
    //---------------------------------------------------------------------------------------------------------------------------------
    public Optional<Entree> getEntreeById(@PathVariable Integer id) {
        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();
        System.out.println("getting entree by id: " + id);
        Optional<Entree> entreeById = entrees.stream().filter(entree -> entree.getId() == id).findFirst();
        return entreeById;
    }
    //---------------------------------------------------------------------------------------------------------------------------------
    public Entree changeObject(@RequestBody Entree requestBody, @PathVariable Integer id) {
        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();

        Optional<Entree> optionalEntreeById = entrees.stream().filter(entree -> entree.getId().equals(id)).findFirst();
        //find entree by id

        if (optionalEntreeById.isPresent()) {
            Entree foundEntree = optionalEntreeById.get();
            foundEntree.setPrice(requestBody.getPrice());
            foundEntree.setFlavor(requestBody.getFlavor());
            foundEntree.setSize(requestBody.getSize());

            if (requestBody.getPrice() == null) {
                System.out.println("The price is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            } if (requestBody.getFlavor() == null) {
                System.out.println("The flavor is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }  if (requestBody.getSize() == null) {
                System.out.println("The size is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            return foundEntree; //if app existed AND all field requirements were met
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        // throwing exception if no item by id exists
    }
    public Entree changeField(@RequestBody Entree requestBody, @PathVariable Integer id) {
        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();
        Optional<Entree> optionalEntreeById = entrees.stream().filter(entree -> entree.getId().equals(id)).findFirst();



        if (optionalEntreeById.isPresent()) {
            Entree foundEntree = optionalEntreeById.get();
            if (requestBody.getPrice() == null) {
                System.out.println("before change" + foundEntree);
                return foundEntree;
            }
            foundEntree.setPrice(requestBody.getPrice());
            System.out.println("after change" + foundEntree);

            if (requestBody.getFlavor() == null) {
                System.out.println("before change" + foundEntree);
                return foundEntree;
            }
            foundEntree.setFlavor(requestBody.getFlavor());
            System.out.println("after change" + foundEntree);

            if (requestBody.getSize() == null) {
                System.out.println("before change" + foundEntree);
                return foundEntree;
            }
            foundEntree.setSize(requestBody.getSize());
            System.out.println("after change" + foundEntree);

        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);

    }
}