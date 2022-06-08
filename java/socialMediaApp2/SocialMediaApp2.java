import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SocialMediaApp2 {
    
    // private static Integer getUser1Posts(List<Post2> posts) { 
    //     Integer user1Posts = posts.stream().filter(post -> post.getUserId() == 1).collect(Collectors.toList()).size();
    //     return user1Posts; 
    // }

    // private static List<Comment2> getCommentsOnUser1Posts(List<Comment2> comments) { 
    //     List<Comment2> user1PostsComments = comments.stream().filter(comment -> comment.getPostId() == 1).collect(Collectors.toList());
    //     return user1PostsComments; 
    // }

    // private static List<Comment2> getAllUser1Comments(List<Comment2> comments) { 
    //     List<Comment2> user1AllComments = comments.stream().filter(comment -> comment.getFirstName() == "victoria").collect(Collectors.toList());
    //     return user1AllComments; 
    // }


    public static void main(String[] args) {
        Comment2 comment1 = new Comment2(1, "wow great post" );
        Comment2 comment2 = new Comment2(2, "making a comment on this post");
        Comment2 comment3 = new Comment2(3, "mreowwwww");
        Comment2 comment4 = new Comment2(4, "i am not a cat");
        Comment2 comment5 = new Comment2(5, "i'm a little teapot");
        Comment2 comment6 = new Comment2(6, "boop boop beep beep");
        Comment2 comment7 = new Comment2(7, "meow meow");
        Comment2 comment8 = new Comment2(8, "brb dyin");
        Comment2 comment9 = new Comment2(9, "this sucks");
        Comment2 comment10 = new Comment2(10, "cat nap");

        List<Comment2> post1Comments = List.of(comment1, comment2);
        List<Comment2> post2Comments = List.of(comment3, comment4, comment5);
        List<Comment2> post3Comments = List.of(comment6, comment7);
        List<Comment2> post4Comments = List.of(comment8);
        List<Comment2> post5Comments = List.of(comment9);
        List<Comment2> post6Comments = List.of(comment10);

        Post2 post1 = new Post2(1, "beep bop boop", post1Comments);
        Post2 post2 = new Post2(2, "the sky is blue", post2Comments);
        Post2 post3 = new Post2(3, "if only i were a fish", post3Comments);
        Post2 post4 = new Post2(4, "why do humans not have tails", post4Comments);
        Post2 post5 = new Post2(5, "zzzZZZzzz", post5Comments);
        Post2 post6 = new Post2(6, "meow meow i am a catte", post6Comments);
        
        
        List<Post2> user1Posts = List.of(post1);
        List<Post2> user2Posts = List.of(post2, post3);
        List<Post2> user3Posts = List.of(post4, post5, post6);

        User2 user1 = new User2(1, "victoria", "portela", "victoria@gmail.com", user1Posts);
        User2 user2 = new User2(2, "maria", "sanches", "maria@gmail.com", user2Posts);
        User2 user3 = new User2(3, "nieve", "paws", "pawPWR@gmail.com", user3Posts);

        List<User2> users = List.of(user1, user2, user3);
        users.forEach(user -> {
            System.out.println("------- " + user);
        });
        // System.out.println("users: " + users);
        

        // TODO: don't hardcode the foreign keys. 
       
        // i know there is a better way to connect the comments to an author just let me live for now. 
        

        //if comment.postId == 1 && post.userId == 1 then the user who 
        List<Post2> posts = List.of(post1,post2,post3,post4,post5,post6);
        System.out.println("list of posts: " + posts);


        // List<Comment2> comments = List.of(comment1, comment2, comment3, comment4, comment5, comment6
        //     , comment7, comment8, comment9, comment10);
        // System.out.println("list of comments: " + comments);



        // Integer user1Posts = getUser1Posts(posts);
        // List<Comment2> user1PostComments = getCommentsOnUser1Posts(comments);
        // List<Comment2> user1AllComments = getAllUser1Comments(comments);
        // System.out.println("---------User 1---------");
        // System.out.println("Posts: " + user1Posts);
        // System.out.println("User1 post 1 has 2 comments: " + user1PostComments);
        // System.out.println("All comments made by User1: " + user1AllComments);

        
    }
}
