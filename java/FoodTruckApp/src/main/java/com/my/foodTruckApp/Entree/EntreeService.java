package com.my.foodTruckApp.Entree;

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
    public Entree createEntree(@RequestBody Entree requestBody) {
        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();
        System.out.println("Creating an entree with requestBody: " + requestBody);
        Integer id = entrees.get(entrees.size() - 1).getId() + 1;

        Entree entree = new Entree(
            id,
            requestBody.getTitle(),
            requestBody.getDescription(),
            requestBody.getPrice()
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
            foundEntree.setTitle(requestBody.getTitle());
            foundEntree.setDescription(requestBody.getDescription());
            foundEntree.setPrice(requestBody.getPrice());

            if (requestBody.getPrice() == null) {
                System.out.println("The price is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            } if (requestBody.getTitle() == null) {
                System.out.println("The flavor is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }  if (requestBody.getDescription() == null) {
                System.out.println("The size is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            return foundEntree;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);

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

            if (requestBody.getTitle() == null) {
                System.out.println("before change" + foundEntree);
                return foundEntree;
            }
            foundEntree.setTitle(requestBody.getTitle());
            System.out.println("after change" + foundEntree);

            if (requestBody.getDescription() == null) {
                System.out.println("before change" + foundEntree);
                return foundEntree;
            }
            foundEntree.setDescription(requestBody.getDescription());
            System.out.println("after change" + foundEntree);

        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);

    }

    public void deleteField(@RequestBody Entree requestBody, @PathVariable Integer id) {
        ArrayList<Entree> entrees = entreeRepository.getAllEntrees();
        System.out.println("deleting Entree by Id: " + id);
        entrees.removeIf(entree -> entree.getId().equals(id));


    }
}