public class Comment2 {
    
    private Integer id;
    private String text;

    // TODO: fix the firstName field to actually be a userID because that shit is currently busted af.
    

    public Comment2() { 
    }

    public Comment2(Integer id, String text) { 
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
        return "Comment: {id: " + id
        + ", text: " + text 
        + "}";
    }
}
