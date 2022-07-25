package com.my.foodTruckApp;

import com.my.foodTruckApp.Appetizer.Appetizer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FoodTruckAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodTruckAppApplication.class, args);

		System.out.println("this is a test");

		Appetizer myAppetizer = new Appetizer(1, "chicken", "tasty chicken for eating", 4);
		System.out.println("myAppetizer" + myAppetizer);
	}


}
