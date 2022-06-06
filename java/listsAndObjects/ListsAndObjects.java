import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

public class ListsAndObjects {
   
    
    public static void main(String[] args) {
        System.out.println("hello from inside main");

        User user1 = new User(
            "Victoria",
            26,
            "Student",
            0,
            "pink",
            3
        );
        System.out.println("------User1---------");
        System.out.println("name: " + user1);

        User user2 = new User(
            "nieve",
            7,
            "princess",
            100000000,
            "pink",
            345
        );
        System.out.println("------user2---------");
        System.out.println("name: " + user2);

        User user3 = new User(
            "Tom",
            60,
            "Accounting",
            60000,
            "green",
            9
        );
        System.out.println("------user3---------");
        System.out.println("name: " + user3);

        User user4 = new User(
            "Nicole",
            25,
            "Marketing",
            20000,
            "green",
            7
        );
        System.out.println("------user4---------");
        System.out.println("name: " + user4);

        User user5 = new User(
            "Sally",
            28,
            "Artist",
            10000,
            "purple",
            12
        );
        System.out.println("------user5---------");
        System.out.println("name: " + user5);
        
        List<User> users = List.of(user1,user2,user3,user4,user5);
        LinkedList<User> retiringSoon = new LinkedList<>();
        LinkedList<User> cantDrink = new LinkedList<>();
        LinkedList<User> needsARaise = new LinkedList<>();
        LinkedList<User> favoriteColor = new LinkedList<>();
        LinkedList<Integer> allUserSalaries = new LinkedList<>();
        Integer totalSalaryCost = 0;
        
        // LinkedList<Integer> newTotalSalary = new LinkedList<>();
        


        System.out.println("-----------Users Retiring Soon--------------");
        users.forEach(user -> { 
            // System.out.println("user: " + user.getName());
            if (user.getAge() > 59) { 
                // System.out.println("retiring soon: " + user.getName());
                retiringSoon.push(user);
            } 
        });
        System.out.println("retiring soon: " + retiringSoon);


        System.out.println("-----------Users that can't drink--------------");

        users.forEach(user -> { 

            if (user.getAge() < 21) { 
                cantDrink.push(user);
            } 
        });
        System.out.println("can't drink (under 21): " + cantDrink);

        System.out.println("-----------Users that need a raise--------------");

        users.forEach(user -> { 
           
            if (user.getSalary() < 30000) {
                needsARaise.push(user);
            } 
        });
        System.out.println("needs a raise asap: " + needsARaise);

        System.out.println("-----------Total spent on salaries--------------");

        users.forEach(user -> { 
            allUserSalaries.push(user.getSalary());
        });

        allUserSalaries.forEach(user -> { 

        //    Integer totalSalaryCost = totalSalaryCost + user;
           System.out.println("total salary cost: " + totalSalaryCost);
           System.out.println("user: " + user);
        });
        // System.out.println("total salary cost: " + newTotalSalary);

        // users.forEach(user -> { 
        //     Integer userSalary = user.getSalary();
        //     //    System.out.println("userSalary " + userSalary);
        //     totalSalaryCost = totalSalaryCost + userSalary;
        //        System.out.println("total salary cost" + totalSalaryCost);
        // });

        System.out.println("-----------Users that like pink--------------");

        users.forEach(user -> { 
           
            if (user.getFavoriteColor() == "pink") {
                favoriteColor.push(user);
            } 
        });
        System.out.println("users that like pink: " + favoriteColor.size());


        System.out.println("-----------First user who's lucky number is 7--------------");

        List<User> luckyNumber7 = users.stream().filter(user -> user.getLuckyNumber() == 7).collect(Collectors.toList());

        System.out.println("first user with lucky number 7 " + luckyNumber7);

        

        
        


    } 
}
