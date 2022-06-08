import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SocialMediaApp {
    
    private static List<Post> getUserPosts(List<Post> posts, Integer userId) { 
        List<Post> userPosts = posts.stream().filter(post -> post.getUserId() == userId).collect(Collectors.toList());
        return userPosts; 
    }
    private static List<Comment> getPostComments(List<Comment> comments, Integer postId ) { 
        List<Comment> userPostsComments = comments.stream().filter(comment -> comment.getPostId() == postId).collect(Collectors.toList());
        return userPostsComments; 
    }
    private static List<Comment> getAllUserComments(List<Comment> comments, Integer userId) { 
        List<Comment> user1AllComments = comments.stream().filter(comment -> comment.getUserId() == userId).collect(Collectors.toList());
        return user1AllComments; 
    }
    private static List<Comment> getAllCommentsOnUser1Posts(List<Comment> comments) { 
        List<Comment> allCommentsReceivedByUser1 = comments.stream().filter(comment -> comment.getPostId() == 1).collect(Collectors.toList());
        return allCommentsReceivedByUser1; 
    }
    private static void getAllPostsUser1CommentedOn(List<Comment> comments) { 
        comments.forEach(comment -> {
            if (comment.getUserId() == 1) { 
                System.out.println("----------posts that user1 commented on: " + comment.getPostId());
            } 
        });   
    }
    

    public static void main(String[] args) {

        User user1 = new User(1, "victoria", "portela", "victoria@gmail.com");
        User user2 = new User(2, "maria", "sanches", "maria@gmail.com");
        User user3 = new User(3, "nieve", "paws", "pawPWR@gmail.com");
        List<User> users = List.of(user1, user2, user3);
        // System.out.println(users);

        Post post1 = new Post(1, "beep bop boop", user1.getId());
        Post post2 = new Post(2, "the sky is blue", user2.getId());
        Post post3 = new Post(3, "if only i were a fish", user2.getId());
        Post post4 = new Post(4, "why do humans not have tails", user3.getId());
        Post post5 = new Post(5, "zzzZZZzzz", user3.getId());
        Post post6 = new Post(6, "meow meow i am a catte", user3.getId());

        //i know there is a better way to connect the comments to an author just let me live for now. 
        Comment comment1 = new Comment(1, "wow great post", post1.getId(), user2.getId());
        Comment comment2 = new Comment(2, "making a comment on this post", post1.getId(), user3.getId());

        Comment comment3 = new Comment(3, "mreowwwww", post2.getId(), user1.getId());
        Comment comment4 = new Comment(4, "i am not a cat", post2.getId(), user3.getId());

        Comment comment5 = new Comment(5, "i'm a little teapot", post3.getId(), user1.getId());
        Comment comment6 = new Comment(6, "boop boop beep beep", post3.getId(), user3.getId());

        Comment comment7 = new Comment(7, "meow meow", post4.getId(), user1.getId());
        Comment comment8 = new Comment(8, "brb dyin", post4.getId(), user2.getId());

        Comment comment9 = new Comment(9, "this sucks", post5.getId(), user1.getId());
        Comment comment10 = new Comment(10, "cat nap", post5.getId(), user2.getId());

        Comment comment11 = new Comment(11, "wish i was a dog", post6.getId(), user1.getId());
        Comment comment12 = new Comment(12, "bork bork bork", post6.getId(), user2.getId());


//if comment.postId == 1 && post.userId == 1 then the user who 
        List<Post> posts = List.of(post1,post2,post3,post4,post5,post6);
        // System.out.println("list of posts: " + posts);

        List<Comment> comments = List.of(comment1, comment2, comment3, comment4, comment5, comment6
            , comment7, comment8, comment9, comment10, comment11, comment12);
        // System.out.println("list of comments: " + comments);

        System.out.println("---------1: how many posts each user has----------");
        List<Post> user1Posts = getUserPosts(posts, user1.getId());
        Integer user1PostAmount = user1Posts.size();
        System.out.println("User1 has " + user1PostAmount + " post");

        List<Post> user2Posts = getUserPosts(posts, user2.getId());
        Integer user2PostAmount = user2Posts.size();
        System.out.println("User2 has " + user2PostAmount + " posts");

        List<Post> user3Posts = getUserPosts(posts, user3.getId());
        Integer user3PostAmount = user3Posts.size();
        System.out.println("User3 has " + user3PostAmount + " posts");

        System.out.println("---------2: All comments by individual post----------");
        List<Comment> user1Post1Comments = getPostComments(comments, post1.getId());
        System.out.println("User1 post1 has 2 comments: " + user1Post1Comments);
        List<Comment> user1Post2Comments = getPostComments(comments, post2.getId());
        System.out.println("User1 post2 has 2 comments: " + user1Post2Comments);

        List<Comment> user2Post1Comments = getPostComments(comments, post3.getId());
        System.out.println("User2 post1 has 2 comments: " + user2Post1Comments);
        List<Comment> user2Post2Comments = getPostComments(comments, post4.getId());
        System.out.println("User2 post2 has 2 comments: " + user2Post2Comments);

        List<Comment> user3Post1Comments = getPostComments(comments, post5.getId());
        System.out.println("User2 post1 has 2 comments: " + user3Post1Comments);
        List<Comment> user3Post2Comments = getPostComments(comments, post6.getId());
        System.out.println("User2 post2 has 2 comments: " + user3Post2Comments);
        // TODO: ask if it makes more sense for it to be user2's first post 2nd post, 
            //TODO: or if it is better to have consistency with what post id it is

        System.out.println("---------3: All comments that a user has made----------");
        List<Comment> user1AllComments = getAllUserComments(comments, user1.getId());
        System.out.println("All comments made by User1: " + user1AllComments);

        List<Comment> user2AllComments = getAllUserComments(comments, user2.getId());
        System.out.println("All comments made by User2: " + user2AllComments);

        List<Comment> user3AllComments = getAllUserComments(comments, user3.getId());
        System.out.println("All comments made by User3: " + user3AllComments);





       
        // List<Comment> user1AllComments = AllUser1Comments(comments);
        // List<Comment> allCommentsReceivedByUser1 = getAllCommentsOnUser1Posts(comments);
        // List<Comment> allCommentsMadeByUser1 = getAllCommentsMadeByUser1(comments);
        System.out.println("---------User 1---------");
        // System.out.println("Posts: " + user1PostAmount);
        // System.out.println("User1 post 1 has 2 comments: " + user1PostComments);
        // System.out.println("All comments made by User1: " + user1AllComments);
        // System.out.println("All comments received by User1: " + allCommentsReceivedByUser1);
        // System.out.println("All comments made by User1: " + allCommentsMadeByUser1);
        // getAllPostsUser1CommentedOn(comments);
        
    }
}
