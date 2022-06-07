import java.util.List;

public class User {
    
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    // private List<Post> posts;

    

    public User() { 

    }

        public User(Integer id, String firstName, String lastName, String email) { 
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
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

        // public List<Post> getPostList(){
        //     return this.posts;
        // }
        // public void setPostList(List<Post> posts) { 
        //     this.posts = posts;
        // }

        public String toString() { 
            return "User: {id: " + id
            + ", first name: " + firstName
            + ", last name: " + lastName
            + ", email: " + email 
            + "}";
        }
}
