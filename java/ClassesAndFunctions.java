import java.util.List;

import javax.sound.sampled.SourceDataLine;

public class ClassesAndFunctions {
    
    public static void main(String[] args) {
        System.out.println("hello from inside Main in Class and Functions");
        sayHello();
        //main is the only method that gets executed so if you do not call a method
        //inside of main, then it will not be printed. 
        //so if sayHello(); was not called on line 7, it would not print out the line
        //on line 15

        sayHelloTo("lucas");
        Integer total = calculateTotal(12, 2);
        System.out.println(total);

        String ourColor = getColor("red");
        System.out.println(ourColor);

        System.out.println("-------CALLING MY STATIC CLASS ---------");

        MyStaticClass.printFavoriteColor();

        List<String> ourNames = List.of("emre", "daniel", "lucas", "june");
        Boolean result = MyStaticClass.areNamesTheSameLength(ourNames);
        System.out.println("is true? " + result);
    }
    
    public static void sayHello() { 
        System.out.println("hello from say hello");
    }

    public static void sayHelloTo(String name) {
        System.out.println("hello " + name);
    }

    public static Integer calculateTotal(Integer subtotal, Integer tip) {
        //find the total based on the subtotal and the tip
        Integer total = subtotal + tip;
        return total;
    }

    public static String getColor(String color) { 

        return color;
    }
}


// the reason you would want to have a function is because it is reusable code. 
//so you can make it run over and over again when you call it.
//the function definition will not call itself or run itself, it must be called
//and then it will run based on what you give it in the argument. 


//when you execute a method, java looks for the main method and only executes
//things inside the main method