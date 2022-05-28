class Guest {
    
    String firstName;
    String lastName;
    Integer age;

    //constructor = creates an instance of the GUEST class
    //it doesnt have void or static, it is Guest which is our class name. 
    public Guest() { //takes zero arguments
        //returns nothing, its just an empty object

    }

    //all args constructor
    //this constructor takes in these arguments. this
    // isno the same thing as lies 3-4, its different

    public Guest(String firstName, String lastName, Integer age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //methods = actions
    public void eat(String food) {
        System.out.println(this.firstName + " is eating: " + food );
        
    }
}
