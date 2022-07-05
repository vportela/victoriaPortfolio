package com.my.firstSpringBootService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.Result;
import java.util.List;

@RestController
public class MyFirstController {

    @GetMapping("/")
    public void sayHelloWorld() {
        System.out.println("hewwo i'm a wittle teapwot");
    }

    @GetMapping("/hello")
    public String getHelloWorld() {
        System.out.println("this is the API");
        return "hello i am just a little guy, dont forget to restart the service in intelliJ ";
    }

    @GetMapping("/this-is-my-awesome/url/that-i/made-up/in-2022")
    public String crazyAPI() {
        System.out.println("The crazy API was called");
        return "Aint this something";
    }

    @PostMapping("/cookie")
    public void createCookie() {
        System.out.println("i want a cookie");
    }

//    this is where the homework begins

    @GetMapping("/first-get")
    public String getTheFirstOne() {
        System.out.println("this is my first get request for homework");
        return "wowie wowie you did a .GET request with postman!";
    }

    @PostMapping("first-post")
    public String getTheFirstPost() {
        System.out.println("this is my first post request for homework");
        return "beep bop, i'm a post!";
    }

    @PostMapping("mcd-order")
    public List<String> createOrder() {
        List<String> myOrder = List.of("big mac", "fwench fwies", "small sprite", "Oreo mcflurry");
        return myOrder;
    }
    @GetMapping("mcd-order")
    public List<String> getMcDonalds() {
        System.out.println("going on a McDonald run");

        return createOrder();
    }

    @GetMapping("number")
    public Integer number() {
        System.out.println("getting number");
        return 69;
    }

    @GetMapping("catte")
    public Boolean catte() {
        System.out.println("is catte fat?");
        String catte = "fat";

        if(catte == "fat") {
            return true;
        } else {
            return false;
        }
    }

    @PostMapping("names")
    public String names() {
        String name1 = "nieve";
        String name2 = "bob";
        String name3 = "tim";

        return "names: " + name1 + ", " + name2 + ", " + name3;
    }

    @PostMapping("animals")
    public List<String> animals() {
        List<String> animalList = List.of("cat", "dog", "fish");

        return animalList;
    }

    @GetMapping("carsCarsCars")
    public List<Car> carList() {
        System.out.println("getting list of cars");
        Car myCar = new Car("civic", "honda", 2014, "red");
        Car lucasCar = new Car("Elantra", "Hyundai", 2013, "Black");
        return List.of(myCar, lucasCar);
    }

    @GetMapping("car")
    public Car myCar() {
        System.out.println("getting just my car");
        Car myCar = new Car("civic", "honda", 2014, "red");
        return (myCar);
    }

    @GetMapping("lucasCar")
    public Car lucasCarFunction() {
        System.out.println("getting just lucas's car");
        return carList().get(1);
    }


    @GetMapping("myName/{victoria}")
    public String name(@PathVariable("victoria") String name) {

        return "HEWWOoo " + "Victoria";
    }



    @PostMapping("helloThere")
    public String printCar(@RequestBody Car car){
        System.out.println("printing car object: " + car);
        return "success";
    }

    @PostMapping("good-dog")
    public String printDog(@RequestBody String bork) {
        System.out.println("saying hello to good dog");
        return "dog says: " + bork;
    }

    @PostMapping("happyBirthday")
    public Integer printDog(@RequestBody Integer birthday) {
        System.out.println("printing birthday");
        return birthday;
    }



}
