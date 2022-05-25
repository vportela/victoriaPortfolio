import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


//everything must be inside a class
class DataTypes { 

    public static void main(String [] args){
        System.out.println("hello world");
        
        System.out.println("---------------STRINGS-------------");
        //string
        String dogName = "Bucky";
        //datatype variableName = yourThing
        System.out.println("dogName %s".formatted(dogName));
        //const variableName: data type = yourThing < ---- react typescript

        System.out.println("---------------NUMBERS-------------");
        // number
        Integer number = 35;
        System.out.println("number: %s".formatted(number));
        //Integer is for whole numbers
        //BigDecimal is for decimals but it must me imported with "import java.math.BigDecimal"
        //but there are a bunch of different datatypes for numbers, these are the basic two. 

        System.out.println("---------------BOOLEAN-------------");
        //boolean
        Boolean isHappy = true;
        System.out.println("isHappy: %s".formatted(isHappy));

        System.out.println("---------------NULL-------------");
        // null
        String myNullString = null;
        System.out.println("myNullString".formatted(myNullString));
        //almost anything can be nullable in java

        // undefined
        //there is no undefined in java you just use null instead


        System.out.println("---------------ARRAYS AND LIST-------------");
        // arrays and list
        ArrayList<String> myArrayList = new ArrayList<>(); // an array without specific size
        myArrayList.add("some string");
        myArrayList.add("another stirng");
        Collections.addAll(myArrayList, "third thing", "forth thing");

        System.out.println("myArrayList: %s".formatted(myArrayList));

        //use lists instead of arrays
        List<String> myList = List.of("first thing in my list", "2nd", "3rd", "4th");
        System.out.println("myList: %s".formatted(myList));

        //objects
        //TBD we will discuss object oriented programming later

        System.out.println("-------------static function---------");
        tellMeAJoke();

       Integer result1 = addNumbers(1, 2);
       System.out.println("result1: %s".formatted(result1));

       Integer result2 = addNumbers(500, 27);
       System.out.println("result2: %s".formatted(result2));
    }

    // sTATIC FUNCTION
    public static void tellMeAJoke() { 
        System.out.println("emre smells feet lelel");
    }

    public static Integer addNumbers(Integer firstNumber, Integer secondNumber) { 
        Integer result = firstNumber + secondNumber; 
        return result; 
    }
}
// understand to the best of your ability what all these words in the 
// method mean on line 4.
// each of those words is doing something different.

// figure out how to create and system out (sysout)all th emain data types
// we learned in typescript like
// string, number, boolean, null, undefined, array, and object.

// sysout for each data type like we did above for helloworld. 

// public: access specifier, means you can call this method from outside the class you are
// currently in aka accessed publicly akak accessible by any class

// static: access modifier (we can all this method directly using  a class name without making
// an object of it), keyword that identifies class-related things. (it makes a method
// accessible without instatiating a class)

// void: type of return (does not have any value) returns nothing. 

// main: just the name of the method/function, this name is fixed.
//this i the entry point for a class so when oyu excecute a class it is looking
//for a method called main and that is the first thing it will execute. 

// string [] args: used to pass the command line argument to the main method.
//it works just like an argument in an arrow function. the right side is the datatype



