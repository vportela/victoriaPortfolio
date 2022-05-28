class Party {
    public static void main(String[] args) {
        System.out.println("Throwing a party!");
//----------- react/js style object
    //     const guest = { 
    //         firstName: "Daniel",
    //         lastName: "dsfg",
    //         age: 16,
    //     }

    //    console.log( "guests first name: ", guest.firstname)
//-----------------------

// to get an INSTANCE of a class, you must instanciate it.
        //type name = 
        Guest guestObject = new Guest(); //Guest() is the constructor, new is how you instanciate
        guestObject.firstName = "Lucas";
        guestObject.lastName = "dsfgh";
        guestObject.age = 28;
        System.out.println("This is my guestObject" + guestObject.firstName);
        System.out.println("lastname" + guestObject.lastName);
        System.out.println("age" + guestObject.age);
        guestObject.eat("hamburger");

        Guest guest2 = new Guest();
        guest2.firstName = "Sasha";
        guest2.lastName = "Larson";
       

        System.out.println("guest2 first name" + guest2.firstName);
        System.out.println("guest2 last name" + guest2.lastName);
        System.out.println("guest2 age: " + guest2.age);
        guest2.eat("cake");

        System.out.println("--------ALL ARGS CONSTRUCTOR");
        Guest guest3 = new Guest("victoria", "portela", 26);

        System.out.println("guest3" + guest3);
        System.out.println("guest 3 " + guest3.firstName);
        System.out.println("guest 3 " + guest3.lastName);
        System.out.println("guest 3 " + guest3.age);   
        guest3.eat("bigmac"); 

        System.out.println("--------LIST OF GUESTS------");
        List<Guest> guests = List.of(guestObject, guest2, guest3);
        guests.forEach(guests -> {
            
        })


    }
}
//just because you use a java object, you are not using object oriented programming