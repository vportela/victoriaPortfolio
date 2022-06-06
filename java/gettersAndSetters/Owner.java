import java.util.List;

public class Owner {

    private String firstName;
    private String lastName;
    private Integer phoneNumber;
    private Boolean canHang;

    //constructors
    //constructors allow you to instantiate an object
    public Owner() { 

    }

    public Owner(String firstName, String lastName, Integer phoneNumber, boolean canHang) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.canHang = canHang;
        
    }
      //firstName
    public String getFirstName(){ 
        return this.firstName;
    }
    public void setFirstName(String firstName) { 
        this.firstName = firstName;
    }

       //lastName
    public String getLastName(){ 
        return this.lastName;
    }
    public void setLastName(String lastName) { 
        this.lastName = lastName;
    }

       //phoneNumber
    public Integer getPhoneNumber(){ 
        return this.phoneNumber;
    }
    public void setPhoneNumber(Integer phoneNumber) { 
        this.phoneNumber = phoneNumber;
    }

      //canHang
    public Boolean getCanHang(){ 
        return this.canHang;
    }
    public void setCanHang(Boolean canHang) { 
        this.canHang = canHang;
    }

    public String toString() { 
        return "Owner: {firstName: " + firstName
           + ", lastName: " + lastName
           + ", phoneNumber: " + phoneNumber
           + ", canHang: " + canHang + "}";
    }
}
