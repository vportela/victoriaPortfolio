import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SocialMediaApp {
    
    private static Integer getUser1Posts(List<Post> posts) { 
        Integer user1Posts = posts.stream().filter(post -> post.getUserId() == 1).collect(Collectors.toList()).size();
        return user1Posts; 
    }

    private static List<Comment> getCommentsOnUser1Posts(List<Comment> comments) { 
        List<Comment> user1PostsComments = comments.stream().filter(comment -> comment.getPostId() == 1).collect(Collectors.toList());
        return user1PostsComments; 
    }

    private static List<Comment> getAllUser1Comments(List<Comment> comments) { 
        List<Comment> user1AllComments = comments.stream().filter(comment -> comment.getUserId() == 1).collect(Collectors.toList());
        return user1AllComments; 
    }

    private static List<Comment> getAllCommentsOnUser1Posts(List<Comment> comments) { 
        List<Comment> allCommentsReceivedByUser1 = comments.stream().filter(comment -> comment.getPostId() == 1).collect(Collectors.toList());
        return allCommentsReceivedByUser1; 
    }


    public static void main(String[] args) {

        User user1 = new User(1, "victoria", "portela", "victoria@gmail.com");
        User user2 = new User(2, "maria", "sanches", "maria@gmail.com");
        User user3 = new User(3, "nieve", "paws", "pawPWR@gmail.com");

        List<User> users = List.of(user1, user2, user3);
        System.out.println(users);


        Post post1 = new Post(1, "beep bop boop", user1.getId());
        Post post2 = new Post(2, "the sky is blue", user2.getId());
        Post post3 = new Post(3, "if only i were a fish", user2.getId());
        Post post4 = new Post(4, "why do humans not have tails", user3.getId());
        Post post5 = new Post(5, "zzzZZZzzz", user3.getId());
        Post post6 = new Post(6, "meow meow i am a catte", user3.getId());

        //i know there is a better way to connect the comments to an author just let me live for now. 
        Comment comment1 = new Comment(1, "wow great post", post3.getId(), user1.getId());
        Comment comment2 = new Comment(2, "making a comment on this post", post1.getId(), user2.getId());
        Comment comment3 = new Comment(3, "mreowwwww", post2.getId(), user3.getId());
        Comment comment4 = new Comment(4, "i am not a cat", post4.getId(), user1.getId());
        Comment comment5 = new Comment(5, "i'm a little teapot", post6.getId(), user2.getId());
        Comment comment6 = new Comment(6, "boop boop beep beep", post1.getId(), user2.getId());
        Comment comment7 = new Comment(7, "meow meow", post6.getId(), user1.getId());
        Comment comment8 = new Comment(8, "brb dyin", post2.getId(), user3.getId());
        Comment comment9 = new Comment(9, "this sucks", post4.getId(), user3.getId());
        Comment comment10 = new Comment(10, "cat nap", post3.getId(), user3.getId());

//if comment.postId == 1 && post.userId == 1 then the user who 
        List<Post> posts = List.of(post1,post2,post3,post4,post5,post6);
        System.out.println("list of posts: " + posts);


        List<Comment> comments = List.of(comment1, comment2, comment3, comment4, comment5, comment6
            , comment7, comment8, comment9, comment10);
        System.out.println("list of comments: " + comments);



        Integer user1Posts = getUser1Posts(posts);
        List<Comment> user1PostComments = getCommentsOnUser1Posts(comments);
        List<Comment> user1AllComments = getAllUser1Comments(comments);
        List<Comment> allCommentsReceivedByUser1 = getAllCommentsOnUser1Posts(comments);
        System.out.println("---------User 1---------");
        System.out.println("Posts: " + user1Posts);
        System.out.println("User1 post 1 has 2 comments: " + user1PostComments);
        System.out.println("All comments made by User1: " + user1AllComments);
        System.out.println("All comments received by User1: " + allCommentsReceivedByUser1);

        
    }
}
