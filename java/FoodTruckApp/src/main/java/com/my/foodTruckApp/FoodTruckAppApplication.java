package com.my.foodTruckApp;
import com.my.foodTruckApp.customer.Customer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class FoodTruckAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodTruckAppApplication.class, args);
		System.out.println("this is a test");

	}


}
