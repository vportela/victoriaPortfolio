import java.util.List;

public class SocialMediaApp {
    
    public static void main(String[] args) {

        Post post1 = new Post(1, "this is a post");
        Post post2 = new Post(2, "the sky is blue");
        Post post3 = new Post(3, "why do humans not have tails");
        Post post4 = new Post(4, "if only i were a fish");
        Post post5 = new Post(5, "these are song lyrics");
        Post post6 = new Post(6, "beep boop bop");

        // Comment comment1 = new Comment(1, "wow great post");
        // Comment comment2 = new Comment(1, "making a comment on this post");
        // Comment comment3 = new Comment(1, "very helpful to leave comments");
        // Comment comment4 = new Comment(1, "i am not a cat");
        // Comment comment5 = new Comment(1, "i'm a little teapot");
        // Comment comment6 = new Comment(1, "boop boop beep beep");
        // Comment comment7 = new Comment(1, "meow meow");
        // Comment comment8 = new Comment(1, "brb dyin");
        // Comment comment9 = new Comment(1, "this sucks");


        List<Post> user1Posts = List.of(post1);
        List<Post> user2Posts = List.of(post2, post3);
        List<Post> user3Posts = List.of(post4, post5, post6);

        // System.out.println("user3posts" + user3Posts);
        // List<Comment> post1Comments = List.of(comment1,comment2);
        // List<Comment> post2Comments = List.of(comment3,comment4);
        // List<Comment> post3Comments = List.of(comment5);
        // List<Comment> post4Comments = List.of(comment6);
        // List<Comment> post5Comments = List.of(comment7,comment8);
        // List<Comment> post6Comments = List.of(comment9);





        User user1 = new User(1, "victoria", "portela", "victoria@gmail.com", user1Posts);
        User user2 = new User(2, "maria", "sanches", "maria@gmail.com", user2Posts);
        User user3 = new User(3, "nieve", "paws", "pawPWR@gmail.com", user3Posts);

        List<User> users = List.of(user1, user2, user3);
        System.out.println(users);

        
    }
}
