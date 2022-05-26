import java.util.List;

public class MyStaticClass {

    public static void printFavoriteColor(){
        System.out.println("my favorite color is pink");
    }

    public static Boolean areNamesTheSameLength(List<String> names) {
        Integer previousNameLength = names.get(0).length();
        for (String name : names){
           
            if (name.length() != previousNameLength ) {
                return false;
            }
        };
        return true;

    }

}


//because there is no main class here, you can compile this function but you cannot execute it.
//java has a strict one class per file rule, thats why your class on line one has the same name as your file. 


//-----------HOMEWORK---------

//fizzbuzz with functions/methods inside of the main. call a function from main.
//do the grading scale
//pass in an array of numbers and print out the letter grades. 