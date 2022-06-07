public class Comment {
    
    private Integer id;
    private String text;
    private Integer postId;
    private String firstName;
    
    // TODO: fix the firstName field to actually be a userID because that shit is currently busted af.
    

    public Comment() { 
    }

    public Comment(Integer id, String text, Integer postId, String firstName) { 
        this.id = id; 
        this.text = text;
        this.postId = postId;
        this.firstName = firstName;
    }
    
    public Integer getId() { 
        return this.id;
    }
    public void setId(Integer id) { 
        this.id = id;
    }

    public String getText() { 
        return this.text;
    }
    public void setText(String text) { 
        this.text = text;
    }

    public Integer getPostId() { 
        return this.postId;
    }
    public void setPostId(Integer postId) { 
        this.postId = postId;
    }
    public String getFirstName() { 
        return this.firstName;
    }
    public void setFirstName(String firstName) { 
        this.firstName = firstName;
    }

    public String toString() { 
        return "Comment: {id: " + id
        + ", text: " + text 
        + ", postId " + postId 
        + ", firstName " + firstName + "}";
    }
}
