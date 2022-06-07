import java.util.List;
import java.util.stream.Collectors;

public class ListsAndObjects {
   
    private static Integer getTotalSalary(List<User> users) { 
        System.out.println("-----------Total spent on salaries--------------");
        Integer totalSalaryCost = 0;
        for(User user : users) {
            totalSalaryCost = totalSalaryCost + user.getSalary();
        }
        return totalSalaryCost; 
    } 

    private static List<User> getRetiringSoon(List<User> users) { 
        System.out.println("-----------Users retiring soon--------------");
        List<User> retiringSoon = users.stream().filter(user -> user.getAge() > 59)
        .collect(Collectors.toList());
        return retiringSoon;
    }

    private static List<User> getUsersUnder21 (List<User> users) { 
        System.out.println("-----------Users that can't drink--------------");
        List<User> under21 = users.stream().filter(user -> user.getAge() < 21)
        .collect(Collectors.toList());
        return under21;
    }


    private static List<User> getUnderpaidUsers (List<User> users) { 
        System.out.println("-----------Users that need a raise--------------");
        List<User> underpaid = users.stream().filter(user -> user.getSalary() < 30000)
        .collect(Collectors.toList());
        return underpaid;
    }
    
    private static List<User> getUsersThatLikePink (List<User> users) { 
        System.out.println("-----------Users who's fav color is pink-------------");
        List<User> usersThatLikePink = users.stream().filter(user -> user.getFavoriteColor() == "pink")
        .collect(Collectors.toList());
        return usersThatLikePink;
    }
    
    private static User getUserWithLuckyNumber7 (List<User> users) { 
        System.out.println("-----------First user who's lucky number is 7-------------"); 
        User luckyNumber7 = users.stream().filter(user -> user.getLuckyNumber() == 7).findAny().orElse(null);
        return luckyNumber7;
    }
    
        
    public static void main(String[] args) {

        User user1 = new User("Victoria",26,"Student",0,"pink",3);
        System.out.println("User1: " + user1);

        User user2 = new User( "nieve",7,"princess", 100000000,"pink", 345);
        System.out.println("user2: " + user2);

        User user3 = new User( "Tom", 60,"Accounting",60000, "green",9);
        System.out.println("user3: " + user3);

        User user4 = new User("Nicole", 25, "Marketing", 20000, "green",7);
        System.out.println("user4: " + user4);

        User user5 = new User( "Sally", 28, "Artist",10000,"purple",8);
        System.out.println("user5: " + user5);
        
        List<User> users = List.of(user1,user2,user3,user4,user5);


        List<User> usersRetiringSoon = getRetiringSoon(users);
        System.out.println("usersRetiringSoon" + usersRetiringSoon);

        List<User> under21 = getUsersUnder21(users);
        System.out.println("can't drink (under 21): " + under21);

        List<User> underpaidUsers = getUnderpaidUsers(users);
        System.out.println("needs a raise asap: " + underpaidUsers);

        Integer totalSalary = getTotalSalary(users);
        System.out.println("total spent on salaries: " + totalSalary);


        List<User> usersThatLikePink = getUsersThatLikePink(users);
        System.out.println("usersThatLikePink" + usersThatLikePink);

        User luckyNumber7 = getUserWithLuckyNumber7(users);
        System.out.println("luckyNumber7" + luckyNumber7);

    }
    
  
}
