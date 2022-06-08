public class Comment {
    
    private Integer id;
    private String text;
    private Integer postId;
    private Integer userId;   

    public Comment() { 
    }

    public Comment(Integer id, String text, Integer postId, Integer userId) { 
        this.id = id; 
        this.text = text;
        this.postId = postId;
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

    public Integer getPostId() { 
        return this.postId;
    }
    public void setPostId(Integer postId) { 
        this.postId = postId;
    }
    public Integer getUserId() { 
        return this.userId;
    }
    public void setUserId(Integer userId) { 
        this.userId = userId;
    }

    public String toString() { 
        return "Comment: {id: " + id
        + ", text: " + text 
        + ", postId " + postId 
        + ", userId " + userId + "}";
    }
}
