import java.util.List;

public class User {

    private String name;
    private Integer age;
    private String job;
    private Integer salary;
    private String favoriteColor;
    private Integer luckyNumber;


    public User() {
        
    }

    public User(
        String name, 
        Integer age, 
        String job, 
        Integer salary, 
        String favoriteColor,
        Integer luckyNumber
    ){

        this.name = name;
        this.age = age;
        this.job = job;
        this.salary = salary;
        this.favoriteColor = favoriteColor;
        this.luckyNumber = luckyNumber;
    }

    //name 
    public String getName() {
        return this.name;
    }
      public void setName(String name) { 
        this.name = name;// setting object field this.name 
    }

    //age
    public Integer getAge() {
        return this.age;
    }
      public void setAge(Integer age) { 
        this.age = age; 
    }

      //job
      public String getJob() {
        return this.job;
    }
      public void setJob(String job) { 
        this.job = job;
    }

     //salary
     public Integer getSalary() {
        return this.salary;
    }
      public void setSalary(Integer salary) { 
        this.salary = salary; 
    }

    //favoriteColor
    public String getFavoriteColor() {
        return this.favoriteColor;
    }
    public void setFavoriteColor(String favoriteColor) { 
        this.favoriteColor = favoriteColor;
    }

      //luckyNumber
      public Integer getLuckyNumber() {
        return this.luckyNumber;
    }
    public void setLuckyNumber(Integer luckyNumber) { 
        this.luckyNumber = luckyNumber;
    }
}
