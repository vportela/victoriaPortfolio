import java.io.PipedWriter;
import java.util.ArrayList;
import java.util.List;

class Statements { 
    public static void main(String[] args) {
        System.out.println("------------IF STATEMENTS-----------");
        String name1 = "Lucas";
        String name2 = "Daniel";
        //in java you use == because you already know the datatype
        if (name1 == name2) { 
            System.out.println("names are the same");
        } else { 
            System.out.println("names are not the same");
        }




        System.out.println("------------LARGEST AND SMALLEST NUMBERS-----------");
        // List<Integer> numbers = List.of(2, 4, 5, 1, 10, 8, 7, 34, 20, 0, -5, 2);
    
        Integer numbers[] = new Integer[]{2, 4, 5, 1, 10, 8, 7, 34, 20, 0, -5, 2};
        // System.out.println(numbers);

        Integer largestNumber = numbers[0];
        Integer smallestNumber = numbers[0];
        // System.out.println("numbers: %s".formatted(numbers[0]));

        // System.out.println("numbers %s".formatted(numbers));
        for (Integer number : numbers) { // ------- this is an outdated forloop
            // System.out.println(number);
            if(number > largestNumber) {
                // System.out.println("numbers %s".formatted(number));
                largestNumber = number;
                
            };
        

        for (Integer number2 : numbers) {

            if(number2 < smallestNumber) { //why did it make me give number a new variable? 
                smallestNumber = number2;
                
            }; 
        }
        
        }
        System.out.println("largest number is: " + largestNumber);
        System.out.println("smallest number is: " + smallestNumber);

        System.out.println("------------ integer array arithmetic ------------");
 
        List<Integer> numbers2 = List.of(1,2,3);
        
        // System.out.println(numbers2); <----- wont print a number from ^^^^ line 52
        //its because you instantiated an object, so when you sout an object it will give you the location
        //of that object on your computer, it wont actually print out the field. 
        //but if you try to sout numbers2[index] 
        System.out.println("numbers2: %s".formatted(numbers2));

        Integer firstNumber = numbers2.get(0); //<------- this is how you get the first index of the array when you have a List<Integer> !!!!!!!!!!
        Integer sum = 0;
        Integer subtraction = 0;
        Integer multiplication = 0;
        Integer division = 0;

        for (Integer number : numbers2) { 
            sum = sum + number;

            if (firstNumber == number) {
                subtraction = number;
                multiplication = number;
                division = number;
            } else {
                subtraction = subtraction - number;
                multiplication = multiplication * number;
                division = division / number;
            }
        }
        System.out.println("sum " + sum);
        System.out.println("subtraction " + subtraction);
        System.out.println("multiplication " + multiplication);
        System.out.println("division " + division);

    }
    
    
}