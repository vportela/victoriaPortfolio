/*
    Create 5 different user objects
        - each with at least 5 different fields
        - 1 field must be `age`
        - 1 field must be `salary`
        - 1 field must be `favoriteColor
        - 1 field must be `luckyNumber` // at least one person must have 7

    Create a function for each of the following problems (each function must be called once per user):

    1. Give me a list of all the users (entire object) who are about to retire (older than 59)
    2. Give me a list of al the users who are not allowed to drink (younger than 21)
    3. Give me a list of users that underpaid (anyone who makes less than 30000)

    4. Tell me the total $ we spend on employee salaries per year (total of all salaries)
        // output is a number
    5. Tell me the total amount of people who like the color "red"
        // output is a number
    6. Tell me the first (and only) person whose lucky number is 7
        // output is an object

    Input for all of them: list of objects (list of users)
    Output: depends on the ask (list, number, object)

*/

// example:
// const user1 = {
//     name: "lucas",
//     // add required fields like age, salary, favoriteColor, luckyNumber
// }
// add 4 more users

// create 6 functions as mentioned above

// call each function once, passing in your list of users







const user1 = {
    firstName: "Zeus",
    lastName: "Zappity",
    age: 100,
    salary: 200000000,
    favoriteColor: "blue",
    luckyNumber: 7,
}

const user2 = {
    firstName: "Apollo",
    lastName: "Fightus",
    age: 63,
    salary: 100000000,
    favoriteColor: "green",
    luckyNumber: 25,
}

const user3 = {
    firstName:"Athena",
    lastName: "Wisdomesse",
    age: 60,
    salary:150000000,
    favoriteColor: "gold",
    luckyNumber: 3,
}

const user4 = {
    firstName: "Zagreus",
    lastName: "Lilman",
    age: 19,
    salary:100,
    favoriteColor: "black",
    luckyNumber: 0,
}

const user5 = {
    firstName: "Narcissus",
    lastName: "Flowers",
    age: 19,
    salary:20000,
    favoriteColor: "pink",
    luckyNumber: 1,
}


const users = [user1, user2, user3, user4, user5]
//console.log("users: ", users)
const listOfUsersRetiringSoon = []

const getUsersRetiringSoon = (listOfUsers) =>{
   
listOfUsers.forEach(theUserImInteratingOn => {

    //console.log("...theUserImInteratingOn ", theUserImInteratingOn)
    const userAge = theUserImInteratingOn.age
   // console.log("userAge: ", userAge)
    
    if (userAge > 59){
    	listOfUsersRetiringSoon.push(theUserImInteratingOn)
      //console.log("list of users who will retire soon", userAges)
    }

})
  return listOfUsersRetiringSoon
}
const soonToRetire = getUsersRetiringSoon(users)
console.log("soon to retire", soonToRetire)




console.log("-------------------users under 21---------------")


const listOfUsersUnder21 = []

const getUsersUnder21 = (listOfUsers) =>{
   
listOfUsers.forEach(theUserImInteratingOn => {

    //console.log("...theUserImInteratingOn ", theUserImInteratingOn)
    const userAge = theUserImInteratingOn.age
   // console.log("userAge: ", userAge)
    
    if (userAge <= 21){
    	listOfUsersUnder21.push(theUserImInteratingOn)
      //console.log("list of users who will retire soon", userAges)
    }

})
  return listOfUsersUnder21
}
const cantDrinkBooze = getUsersUnder21(users)
console.log("these guys cant drink", cantDrinkBooze)



console.log("-------------------users that are underpaid ---------------")



const listOfUsersBeingUnderpaid = []

const getUsersThatAreUnderpaid = (listOfUsers) =>{
   
listOfUsers.forEach(theUserImInteratingOn => {

    //console.log("...theUserImInteratingOn ", theUserImInteratingOn)
    const userSalary = theUserImInteratingOn.salary
   // console.log("userAge: ", userAge)
    
    if (userSalary < 30000){
    	listOfUsersBeingUnderpaid.push(theUserImInteratingOn)
      //console.log("list of users who will retire soon", userAges)
    }

})
  return listOfUsersBeingUnderpaid
}
const needsARaise = getUsersThatAreUnderpaid(users)
console.log("these guys need a raise", needsARaise)




console.log("-------------------how much is spent on salaries ---------------")





const totalSalaryCost = (listOfUsers) =>{
	
  let finalSum = 0

listOfUsers.forEach(theUserImInteratingOn => {
	const userSalary = theUserImInteratingOn.salary
   finalSum = finalSum + userSalary


})
  return finalSum
}
const finalSalaryExpenses = totalSalaryCost(users)
console.log("final salary cost", finalSalaryExpenses)





console.log("-------------------how many people like the color red ---------------")