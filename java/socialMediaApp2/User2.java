import java.util.List;

public class User2 {
    
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private List<Post2> posts;

    public User2() { 

    }

    public User2(Integer id, String firstName, String lastName, String email, List<Post2> posts) { 
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.posts = posts;
    }

    //id
    public Integer getId() { 
        return this.id;
    }
    public void setId(Integer id) { 
        this.id = id;
    }

    //firstName
    public String getFirstName() { 
        return this.firstName;
    }
    public void setFirstName(String firstName) { 
        this.firstName = firstName;
    }

    //lastName
    public String getLastName() { 
        return this.lastName;
    }
    public void setLastName(String lastName) { 
        this.lastName = lastName;
    }

    //email

    public String getEmail() { 
        return this.email;
    }
    public void setEmail(String email) { 
        this.email = email;
    }

    public List<Post2> getPostList(){
        return this.posts;
    }
    public void setPostList(List<Post2> posts) { 
        this.posts = posts;
    }

    public String toString() { 
        return "User: {id: " + id
        + ", firstName: " + firstName
        + ", lastName: " + lastName
        + ", email: " + email 
        + ", posts " + posts + "}";
    }
}
