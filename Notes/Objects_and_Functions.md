objects and functions!!!

change what youre pasting in not to be "type of home" or "age of home", make sure you are actually truthful about what is being pasted in. youre pasting in an object called home1 not a bathroom or home age etc.

make sure to fix your tabs, all your shit is super tabbed. 


you cheated and hardcoded an answer on the overrides!!!! baka!!!! 


Concept! 
Getters and setters

fucntions that "Get" fields and "Set" fields. 
Getter functions are important in back end for security reasons.
it may feel redundant or like youre doing too many things but its important to do it this way because it allows values to be changed and remain flexible. 


const user = {
    firstName: "Lucas",
    lastName: "costa",
    age: 28,
    email: "lucas#gmail.com"
    password: "123password"
}

    const getUserFirstName = (user) => {
        return user.firstName
    }
// you can also do something like this which is string concatenation
//return user.firstName + "" user.lastName
//console.log
const lucasFirstName = getUserFirstName(user1)

console.log("lucas's first name", lucasFirstName)


