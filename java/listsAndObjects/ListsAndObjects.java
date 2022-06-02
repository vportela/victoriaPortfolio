import java.nio.file.DirectoryStream.Filter;
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
        System.out.println("name: " + user1.getName());
        System.out.println("age: " + user1.getAge());
        System.out.println("job: " + user1.getJob());
        System.out.println("salary: " + user1.getSalary());
        System.out.println("favorite color: " + user1.getFavoriteColor());
        System.out.println("lucky number: " + user1.getLuckyNumber());
    

        User user2 = new User(
            "nieve",
            7,
            "princess",
            100000000,
            "pink",
            345
        );
        System.out.println("------user2---------");
        System.out.println("name: " + user2.getName());
        System.out.println("age: " + user2.getAge());
        System.out.println("job: " + user2.getJob());
        System.out.println("salary: " + user2.getSalary());
        System.out.println("favorite color: " + user2.getFavoriteColor());
        System.out.println("lucky number: " + user2.getLuckyNumber());
    

        User user3 = new User(
            "Tom",
            50,
            "Accounting",
            60000,
            "green",
            9
        );
        System.out.println("------user3---------");
        System.out.println("name: " + user3.getName());
        System.out.println("age: " + user3.getAge());
        System.out.println("job: " + user3.getJob());
        System.out.println("salary: " + user3.getSalary());
        System.out.println("favorite color: " + user3.getFavoriteColor());
        System.out.println("lucky number: " + user3.getLuckyNumber());
    

        User user4 = new User(
            "Nicole",
            25,
            "Marketing",
            50000,
            "green",
            7
        );
        System.out.println("------user4---------");
        System.out.println("name: " + user4.getName());
        System.out.println("age: " + user4.getAge());
        System.out.println("job: " + user4.getJob());
        System.out.println("salary: " + user4.getSalary());
        System.out.println("favorite color: " + user4.getFavoriteColor());
        System.out.println("lucky number: " + user4.getLuckyNumber());


        User user5 = new User(
            "Sally",
            28,
            "Artist",
            30000,
            "purple",
            12
        );
        System.out.println("------user5---------");
        System.out.println("name: " + user5.getName());
        System.out.println("age: " + user5.getAge());
        System.out.println("job: " + user5.getJob());
        System.out.println("salary: " + user5.getSalary());
        System.out.println("favorite color: " + user5.getFavoriteColor());
        System.out.println("lucky number: " + user5.getLuckyNumber());
        
        
        List<User> users = List.of(user1,user2,user3,user4,user5);
        User firstUser = users[0];
        String firstUsersName = firstUser.getName();
        user[0].getName();
        List<User> retiringSoon = users.stream().filter(user -> user.getAge() == 26).collect(Collectors.toList());
        System.out.println("retiringSoon" + retiringSoon.toString());

        retiringSoon.forEach(user -> { 
            System.out.println("user: " + user.getName());
        });
    
    } 

    
}
