import java.util.Scanner;

public class Adventure {
    public static void main(String[] args) {
        System.out.println("HEllo from adventure file");
        
      Scanner scanner = new Scanner(System.in);
      System.out.print("what is your name ? ");
      String userInput = scanner.nextLine();

      System.out.println("hello " + userInput);

      System.out.print("Please pick 1,2, or 3: ");
      Integer userNumberPick = scanner.nextInt();
      System.out.println("User picked number: " + userNumberPick);
    if (userNumberPick == 3){ 
        System.out.println("rip dead");
        System.exit(1);
    }

      System.out.print(" are you hungry? ");
      Boolean isHungry = scanner.nextBoolean();
      System.out.println("user hunger status: " + isHungry);
    }
}
