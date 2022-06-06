import java.util.List;

public class Room {
    
    private String name;
    private String use;
    private Integer closets;
    private String color;
    private List<Owner> owners;
    // private List<Test> test;

    //make all fields private
    //make getters and setters for them
    //getter and setter for owners list
    // List<String> Owner = List.of("bob", "tom", "jerry");

    // public List<String> Owner() { 
    //     return this.owners;
    // }

    public Room() { 

    }

    //get list of owners to work with getters and setters List<Owners>
    // do the coding challenge with the list of objects 

    //EACH MODEL/CLASS NEEDS THEIR OWN FILE, YOU CANNOT MAKE AN OWNER MODEL IN THIS FILE !!!!!!!!!!! 
    
//constructor used below is call all args constructor
//what is the point of the constructor? - you need it to instantiate the object/s 
//you cannot have an object without instantiating a class.
//an object is an instantiated class. 
    public Room(String name, String use, Integer closets, String color, List<Owner> owners) {
        this.name = name;
        this.use = use;
        this.closets = closets;
        this.color = color;
        this.owners = owners;
        // this.test = test;
    }

    


     //name
     public String getName() {
        return this.name;
    }
      public void setName(String name) { 
        this.name = name;// setting object field this.name 
    }

     //use
     public String getUse() {
        return this.use;
    }
      public void setUse(String use) { 
        this.use = use;
    }

       //closets
       public Integer getClosets() {
        return this.closets;
    }
      public void setClosets(Integer closets) { 
        this.closets = closets;
    }

    //wall color
     public String getWallColor() {
        return this.color;
    }
      public void setWallColor(String color) { 
        this.color = color;
    }


//     //owner
    public List<Owner> getOwnerList(){ 
        return this.owners;
    }
    public void setOwnerList(List<Owner> owners) { 
        this.owners = owners;
    }

    // //test
    // public List<Test> getTest(){ 
    //     return this.test;
    // }

    // public void setTest(List<Test> test) { 
    //     this.test = test;
    // }

    //Static in a method means you do not need to instanciate a class in order to call the method, you can call it directly.

    //method overwriting = a method that already exists, and you are overruling what it does.
    //so this will make the object in my house.java return the string "hello world".
    // public String toString() {
    //     return "hello world";
    // }

    public String toString() {
        return "Room: {name: " + name
            + ", use: " + use
            + ", closets: " + closets
            + ", color: " + color
            + ", owners: " + owners + "}";
    }

}
//Owner list needs to have it's own file. 


