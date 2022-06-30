package com.my.firstSpringBootService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.SQLOutput;
import java.util.List;

@SpringBootApplication
public class FirstSpringBootServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstSpringBootServiceApplication.class, args);

		Car myCar = new Car("elantra", "hyundai", 2013, "black");
		System.out.println("myCar: " + myCar);

		String myCarMake = myCar.getMake();
		System.out.println("myCarMake: " + myCarMake);

		myCar.setColor("Hot Red");
		System.out.println("myCar color: " + myCar.getColor());
	}


}
