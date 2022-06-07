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


        List<Post> posts = List.of(post1,post2,post3,post4,post5,post6);
        System.out.println("list of posts: " + posts);


        List<Comment> comments = List.of(comment1, comment2, comment3, comment4, comment5, comment6
            , comment7, comment8, comment9, comment10);
        System.out.println("list of comments: " + comments);



        User user1 = new User(1, "victoria", "portela", "victoria@gmail.com");
        User user2 = new User(2, "maria", "sanches", "maria@gmail.com");
        User user3 = new User(3, "nieve", "paws", "pawPWR@gmail.com");

        List<User> users = List.of(user1, user2, user3);
        System.out.println(users);

        Integer user1Posts = getUser1Posts(posts);
        List<Comment> user1PostComments = getCommentsOnUser1Posts(comments);
        System.out.println("---------User 1---------");
        System.out.println("Posts: " + user1Posts);
        System.out.println("User1 post 1 has 2 comments: " + user1PostComments);

        
    }
}
