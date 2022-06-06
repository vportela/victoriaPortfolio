import java.util.List;

class House {
    

    public static void main(String[] args) {
        System.out.println("Welcome to the Dog House");
        
        //constructor is default otherwise known as no args constructor
        Owner owner1 = new Owner("bob", "tom", 954, true);
        Owner owner2 = new Owner("bucky", "bucky", 305, true);
        Owner owner3 = new Owner("billy", "bob", 456, false);

        List<Owner> owners = List.of(owner1, owner2, owner3);

        // Instanciating the owner class (an object which is an instance of a class) which gives you 
        // an owner object.

        //instanciating the owner class with the all args constructor which gives me an owner object.
        //

        // List<Test> test = List.of("test");

        Room room1 = new Room(
            "entryway", 
            "Take off your shoes here", 
            1 , 
            "pink",
            owners
            // List.of("test")
        );
        // room1.setName("Entryway");
        // room1.setUse("Take off your shoes here");
        // room1.setClosets(1);
        // room1.setWallColor("pink");
        // List<String> Owner = List.of("bob", "tom", "jerry");
        // room1.setOwnerList(Owner);
        System.out.println("------------ Room 1 --------------");
        System.out.println("room1: " + room1);
        // System.out.println("Room: " + room1.getName());
        // System.out.println("Room use: " + room1.getUse());
        // System.out.println("Number of closets: " + room1.getClosets());
        // System.out.println("Wall color is: " + room1.getWallColor());


        //lines below are doing basically the same thing as room1 (only for printing out the owners).
        // System.out.println("Owners: " + room1.getOwnerList().get(0).getFirstName());
        // room1.getOwnerList().forEach(owner -> {
        //     System.out.println("Owner firstName: " + owner.getFirstName());
        //     System.out.println("Owner lastName: " + owner.getLastName());
        //     System.out.println("Owner phoneNumber: " + owner.getPhoneNumber());
        //     System.out.println("Owner canHang: " + owner.getCanHang());
        // });
       
        
    }

    //     Room room2 = new Room();  //instead of using no args constructor, use all args here and in
    //     //the other file. It will pass in all the arguments right away and define/set their values 
    //     //so they are never null.
    //     //this will be beneficial later in other languages like Kotlin. 
    //     room2.name = "Living Room";
    //     room2.use = "Watch TV and hang here";
    //     room2.closets = 0;
    //     room2.setWallColor("lemon yellow");
    //     System.out.println("------------ Room 2 --------------");
    //     System.out.println("Room: " + room2.name);
    //     System.out.println("Room use: " + room2.use);
    //     System.out.println("Number of closets: " + room2.closets);
    //     System.out.println("Wall color is: " + room2.getWallColor());
    // }
}
