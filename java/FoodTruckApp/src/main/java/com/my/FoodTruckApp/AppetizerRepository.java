package com.my.FoodTruckApp;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class AppetizerRepository {

    private  final Appetizer appetizer1 = new Appetizer(1,"chicken skewer", "yummy chicken on a stick", 4);
    private  final Appetizer appetizer2 = new Appetizer(2,"pork taco", "Delicious little pocket of pork joy", 8);

    private  final Appetizer appetizer3 = new Appetizer(3,"mango pie", "hot mango pie", 70);
    ArrayList<Appetizer> appetizers = new ArrayList<>(Arrays.asList(appetizer1,appetizer2, appetizer3));

    public List<Appetizer> getAllAppetizers() {
        return appetizers;
    }
}
