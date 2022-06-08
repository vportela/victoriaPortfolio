import java.util.List;

public class Post2 {

    private Integer id;
    private String text;
    private List<Comment2> comments;

    public Post2() { 

    }

    public Post2(Integer id, String text, List<Comment2> comments) { 
        this.id = id; 
        this.text = text;
        this.comments = comments;
     
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

    public List<Comment2> getComments() { 
        return this.comments;
    }
    public void setComments(List<Comment2> comments) { 
        this.comments = comments;
    }

    public String toString() { 
        return "Post: {id: " + id
        + ", text: " + text 
        + ", comments: " + comments +  "}";
    }
}
