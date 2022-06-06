import java.util.List;

public class SocialMediaApp {
    
    public static void main(String[] args) {

        System.out.println("hello from inside socialmediaapp");

        Post post1 = new Post(1, "this is a post");
        Post post2 = new Post(1, "the sky is blue");
        Post post3 = new Post(1, "why do humans not have tails");
        Post post4 = new Post(1, "if only i were a fish");
        Post post5 = new Post(1, "these are song lyrics");
        Post post6 = new Post(1, "beep boop bop");

        Comment comment1 = new Comment(1, "wow great post");
        Comment comment2 = new Comment(1, "wow great post");
        Comment comment3 = new Comment(1, "wow great post");
        Comment comment4 = new Comment(1, "wow great post");
        Comment comment5 = new Comment(1, "wow great post");
        Comment comment6 = new Comment(1, "wow great post");
        Comment comment7 = new Comment(1, "wow great post");


        List<Post> user1Posts = List.of(post1);
        List<Post> user2Posts = List.of(post2, post3);
        List<Post> user3Posts = List.of(post4, post5, post6);




        User user1 = new User(1, "victoria", "portela", "victoria@gmail.com", user1Posts);
        User user2 = new User(2, "maria", "sanches", "maria@gmail.com", user2Posts);
        User user3 = new User(3, "nieve", "paws", "pawPWR@gmail.com", user3Posts);

        List<User> users = List.of(user1, user2, user3);
        System.out.println(users);

        
    }
}
