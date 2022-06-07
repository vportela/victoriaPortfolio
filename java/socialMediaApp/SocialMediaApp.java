import java.util.List;

public class SocialMediaApp {
    
    public static void main(String[] args) {

        Post post1 = new Post(1, "beep bop boop", 1);
        Post post2 = new Post(2, "the sky is blue", 2);
        Post post3 = new Post(3, "if only i were a fish", 2);
        Post post4 = new Post(4, "why do humans not have tails", 3);
        Post post5 = new Post(5, "zzzZZZzzz", 3);
        Post post6 = new Post(6, "meow meow i am a catte", 3);

        Comment comment1 = new Comment(1, "wow great post", 3);
        Comment comment2 = new Comment(2, "making a comment on this post", 1);
        Comment comment3 = new Comment(3, "wow so insightful", 2);
        Comment comment4 = new Comment(4, "i am not a cat", 4);
        Comment comment5 = new Comment(5, "i'm a little teapot", 6);
        Comment comment6 = new Comment(6, "boop boop beep beep", 1);
        Comment comment7 = new Comment(7, "meow meow", 6);
        Comment comment8 = new Comment(8, "brb dyin", 2);
        Comment comment9 = new Comment(9, "this sucks", 4);
        Comment comment10 = new Comment(10, "cat nap", 3);


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





        User user1 = new User(1, "victoria", "portela", "victoria@gmail.com");
        User user2 = new User(2, "maria", "sanches", "maria@gmail.com");
        User user3 = new User(3, "nieve", "paws", "pawPWR@gmail.com");

        List<User> users = List.of(user1, user2, user3);
        System.out.println(users);

        
    }
}
