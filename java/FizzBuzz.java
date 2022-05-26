import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class FizzBuzz {
    
   public static void main(String[] args) {

    // System.out.println("hello from inside fizzbuzz");

    List<Integer> fizzBuzzNumbers = IntStream.rangeClosed(0, 100).boxed().toList();
    System.out.println(fizzBuzzNumbers);

  
    String finalFizzBuzz = fizzBuzz(fizzBuzzNumbers);
    System.out.println(finalFizzBuzz);
    
   }

   public static String fizzBuzz(List<Integer> numbers) {
        
    // System.out.println("oopsie");

    for(Integer number : numbers){
        // if (number % 15 == 0) {
            // return "FIZZBUZZ";
        
        // } else if (number % 3 == 0) { 
        //     return "FIZZ";
        // } else if (number % 5 == 0) { 
        //     return "BUZZ";
        // } return String.valueOf(number); 
    };
    return ;

} 
}
