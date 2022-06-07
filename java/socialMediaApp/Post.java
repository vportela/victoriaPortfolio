public class Post {

    private Integer id;
    private String text;
    private Integer userId;

    public Post() { 

    }

    public Post(Integer id, String text, Integer userId) { 
        this.id = id; 
        this.text = text;
        this.userId = userId;
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

    public Integer getUserId() { 
        return this.userId;
    }
    public void setUserId(Integer userId) { 
        this.userId = userId;
    }

    public String toString() { 
        return "Post: {id: " + id
        + ", text: " + text 
        + ", userId " + userId + "}";
    }
}
