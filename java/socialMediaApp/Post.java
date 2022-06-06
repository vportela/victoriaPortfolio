public class Post {

    private Integer id;
    private String text;

    public Post() { 

    }

    public Post(Integer id, String text) { 
        this.id = id; 
        this.text = text;
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

    public String toString() { 
        return "Post: {id: " + id
        + ", text: " + text + "}";
    }
}
