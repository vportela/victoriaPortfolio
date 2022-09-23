package com.my.foodTruckApp.AppetizerNoDb;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class AppetizerRepositoryNoDb {

    private final AppetizerNoDb appetizerNoDb1 = new AppetizerNoDb(1, "chicken skewer", "yummy chicken on a stick", 4);
    private final AppetizerNoDb appetizerNoDb2 = new AppetizerNoDb(2, "pork taco", "Delicious little pocket of pork joy", 8);

    private final AppetizerNoDb appetizerNoDb3 = new AppetizerNoDb(3, "mango pie", "hot mango pie", 70);
    ArrayList<AppetizerNoDb> appetizerNoDbs = new ArrayList<>(Arrays.asList(appetizerNoDb1, appetizerNoDb2, appetizerNoDb3));

    public List<AppetizerNoDb> getAllAppetizers() {
        return appetizerNoDbs;
    }
}
