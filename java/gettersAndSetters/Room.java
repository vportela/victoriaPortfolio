import java.util.List;

public class Room {
    
    private String name;
    private String use;
    private Integer closets;
    private String color;
    private List<String> owners;

    //make all fields private
    //make getters and setters for them
    //getter and setter for owners list
    // List<String> Owner = List.of("bob", "tom", "jerry");

    public Room() {
        
    }
    // public List<String> Owner() { 
    //     return this.owners;
    // }

    //get list of owners to work with getters and setters List<Owners>
    // do the coding challenge with the list of objects 

    //EACH MODEL/CLASS NEEDS THEIR OWN FILE, YOU CANNOT MAKE AN OWNER MODEL IN THIS FILE !!!!!!!!!!! 
    
//constructor used below is call all args constructor
//what is the point of the constructor? - you need it to instantiate the object/s 
//you cannot have an object without instantiating a class.
//an object is an instantiated class. 
    public Room(String name, String use, Integer closets, String color, List<String> owners) {
        this.name = name;
        this.use = use;
        this.closets = closets;
        this.color = color;
        this.owners = owners;
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
    public List<String> getOwnerList(){ 
        return this.owners;
    }
    public void setOwnerList(List<String> owners) { 
        this.owners = owners;
    }
}
//Owner list needs to have it's own file. 