package com.my.foodTruckApp.AppetizerNoDb;

import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppetizerServiceNoDb {
    //    private  final Appetizer appetizer1 = new Appetizer(1,"chicken skewer", "yummy chicken on a stick", 4);
//    private  final Appetizer appetizer2 = new Appetizer(2,"pork taco", "Delicious little pocket of pork joy", 8);
//
//    private  final Appetizer appetizer3 = new Appetizer(3,"mango pie", "hot mango pie", 70);
//    ArrayList<Appetizer> appetizers = new ArrayList<>(Arrays.asList(appetizer1,appetizer2, appetizer3));
    private final AppetizerRepositoryNoDb appetizerRepositoryNoDb;

//    public AppetizerService(AppetizerRepository appetizerRepository) {
//        this.appetizerRepository = appetizerRepository;
//    }

//    public AppetizerService(AppetizerRepository appetizerRepository) {
//
//        this.appetizerRepository = appetizerRepository;
//    }
    //------------------------GETTING LIST OF APPS-------------------------

    public List<AppetizerNoDb> getAppetizers() {
        List<AppetizerNoDb> appetizerNoDbs = appetizerRepositoryNoDb.getAllAppetizers();
        System.out.println("getting the appetizer menu" + appetizerNoDbs);

        return appetizerNoDbs;
    }

    // -------------------------------CREATE APP----------------------------


    public AppetizerNoDb createItem(@RequestBody @NotNull AppetizerNoDb requestBody) {
        List<AppetizerNoDb> appetizerNoDbs = appetizerRepositoryNoDb.getAllAppetizers();
        System.out.println("creating an appetizer with requestBody: " + requestBody);
        //add this new appetizer to the appetizers ArrayList<Appetizer>
        Integer id = appetizerNoDbs.get(appetizerNoDbs.size() - 1).getId() + 1;

        AppetizerNoDb appetizerNoDb = new AppetizerNoDb(
                id,
                requestBody.getTitle(),
                requestBody.getDescription(),
                requestBody.getPrice()
        );
        appetizerNoDbs.add(appetizerNoDb);
        return appetizerNoDb;
    }

    //-------------GET APPS BY ID --------------


    public Optional<AppetizerNoDb> getAppetizerById(@PathVariable Integer id) {
        System.out.println("Getting appetizer by id: " + id);
        List<AppetizerNoDb> appetizerNoDbs = appetizerRepositoryNoDb.getAllAppetizers();
        Optional<AppetizerNoDb> appetizerById = appetizerNoDbs.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();

        return appetizerById;
    }

    // --------------------CHANGING/UPDATING AN APP BY ID ------------


    public AppetizerNoDb changeAppetizer(@RequestBody AppetizerNoDb requestBody, @PathVariable Integer id) {

        List<AppetizerNoDb> appetizerNoDbs = appetizerRepositoryNoDb.getAllAppetizers();
        Optional<AppetizerNoDb> optionalAppetizerById = appetizerNoDbs.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();

//        ValidationUtils.rejectIfEmpty();
        if (optionalAppetizerById.isPresent()) {
            AppetizerNoDb foundAppetizerNoDb = optionalAppetizerById.get();
            foundAppetizerNoDb.setPrice(requestBody.getPrice());
            foundAppetizerNoDb.setDescription(requestBody.getDescription());
            foundAppetizerNoDb.setTitle(requestBody.getTitle());

            if (requestBody.getPrice() == null) {
                System.out.println("price is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            if (requestBody.getDescription() == null) {
                System.out.println("description is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
            if (requestBody.getTitle() == null) {
                System.out.println("title is null");
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }
//
//            // trying to return the found appetizer with all of the allowed fields updated
            return foundAppetizerNoDb;
        }
//      if the Optional does not exist, throw the error code not found.
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        //if a field is missing from the new data, throw an exception.
        //how do you know if a field is missing? -- it is null

        //possible option, if you have a "safe appetizer" type of thing that only gives access to the fields you
        //want to be able to change, and then if the arguments don't match, you throw the exception.

    }

    //-------------------- PATCHING ---------------------


    public AppetizerNoDb changePrice(@RequestBody AppetizerNoDb requestBody, @PathVariable Integer id) {

        List<AppetizerNoDb> appetizerNoDbs = appetizerRepositoryNoDb.getAllAppetizers();

        //find app by it's id
        Optional<AppetizerNoDb> optionalAppetizerById = appetizerNoDbs.stream().filter(appetizer -> appetizer.getId().equals(id)).findFirst();
        //change optional appetizer into just Appetizer so you can set things.
        if (optionalAppetizerById.isPresent()) {
            AppetizerNoDb foundAppetizerNoDb = optionalAppetizerById.get();

            // trying to return the found appetizer with the updated price

            if (requestBody.getPrice() == null) {
                System.out.println("found app before set price" + foundAppetizerNoDb);
                return foundAppetizerNoDb;
            }
            foundAppetizerNoDb.setPrice(requestBody.getPrice());
            System.out.println("found app after set price" + foundAppetizerNoDb);

            //this way doesnt work because if this if statement returns, it stops.
            // if it runs the else (aka makes the change), it continues to the next if statement because
            //there was technically no return, but then it will stop once that one returns something.

            if (requestBody.getTitle() == null) {
                System.out.println("title before change" + foundAppetizerNoDb);
                return foundAppetizerNoDb;
            }
            foundAppetizerNoDb.setTitle(requestBody.getTitle());
            System.out.println("title after change" + foundAppetizerNoDb);

//            if(requestBody.getDescription() == null) {
//                System.out.println("title before change" + foundAppetizer);
//                return foundAppetizer;
//            } foundAppetizer.setDescription(requestBody.getDescription());
//            System.out.println("title after change" + foundAppetizer);

            return foundAppetizerNoDb;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
}
