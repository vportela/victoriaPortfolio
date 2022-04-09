//----------- copy of old code i was working on, js fiddle copy------

/// to make a new thing, create a function that adds a new object into the 
//todo items object array. Then you need to make a function that looks through the array
//to put in the text because right now you are manually adding the text.

const item = todoItems.find(item => item.id === 1)
console.log("item 1: ", item.text)

const item2 = todoItems.find(item => item.id === 2)
console.log("item 2: ", item2.text)

const item3 = todoItems.find(item => item.id === 3)
console.log("item 3: ", item3.text)

const item4 = todoItems.find(item => item.id === 4)
console.log("item 4: ", item4.text)

// First item is checked upon loading the page (Look into that 
//function that talked about getting the FIRST person who likes 7
// instead of just anyone who likes 7)

window.onload = onPageLoad();

function onPageLoad () {
    document.querySelector(".todo-checkbox").checked = true;
}

// document.querySelector(".todo-checkbox").onclick = completeTask();

// function completeTask(listOfItemObjects) {

//     listOfItemObjects.forEach(object => {
//         //console.log("user object from todoitem array", object)
//         const completionBoolean = object.completed
//         //console.log( "completion boolean", completionBoolean)

//         if (completionBoolean === true) {
//             console.log( "this task is complete!")

//         //     } else {
//         //         console.log("this task is NOT complete!")
//         }
//     })
// }
// const completedTasks = completeTask(todoItems)


// // document.querySelector(".todo-checkbox").onclick = 
// function makeTrue(listOfItemObjects){
//    console.log("listOfItemObjects",listOfItemObjects)
//    const thisItem = todoItems.find(item => item.completed)
//    console.log("thisItem is true: ", thisItem.completed)

//    listOfItemObjects.forEach(item) => {
//        if (thisItem.completed === false)
//    }
// }
// const makeItTruePls = makeTrue(todoItems)

// const toDoText = document.getElementsByClassName("main-todo-list")
// console.log("toDoText", toDoText)
// //toDoText.remove()

// const appElement = document.getElementsByClassName("app")
// console.log("appElement", appElement[0])

// const mainTodoElement = document.createElement("div")
// mainTodoElement.id="new-main-todo-list"
// //mainTodoElement.className="todo-list"



const rootElement = document.getElementById("main-todo-list")
console.log("rootElement: ", rootElement)

//------ to do list item 1 -------

const divElement = document.createElement("div")
divElement.className="todo"
divElement.id="todo-id"
rootElement.appendChild(divElement)

const inputElement = document.createElement("input")
inputElement.type="checkbox"
inputElement.className="todo-checkbox"
rootElement.appendChild(inputElement)
divElement.appendChild(inputElement)

const spanElement = document.createElement("span")
spanElement.innerHTML = item.text
spanElement.className="todo-text"
rootElement.appendChild(spanElement)
divElement.appendChild(spanElement)

//------ to do list item 2 -------

const divElement2 = document.createElement("div")
divElement2.className="todo"
//divElement.id="todo-id"
rootElement.appendChild(divElement2)

const inputElement2 = document.createElement("input")
inputElement2.type="checkbox"
inputElement2.className="todo-checkbox"
rootElement.appendChild(inputElement2)
divElement2.appendChild(inputElement2)

const spanElement2 = document.createElement("span")
spanElement2.innerHTML = item2.text
spanElement2.className="todo-text"
rootElement.appendChild(spanElement2)
divElement2.appendChild(spanElement2)

//------ to do list item 3 -------

 const divElement3 = document.createElement("div")
divElement3.className="todo"
//divElement.id="todo-id"
rootElement.appendChild(divElement3)

const inputElement3 = document.createElement("input")
inputElement3.type="checkbox"
inputElement3.className="todo-checkbox"
rootElement.appendChild(inputElement3)
divElement3.appendChild(inputElement3)

const spanElement3 = document.createElement("span")
spanElement3.innerHTML = item3.text
spanElement3.className="todo-text"
rootElement.appendChild(spanElement3)
divElement3.appendChild(spanElement3)

//------ to do list item 4 -------

const divElement4 = document.createElement("div")
divElement4.className="todo"
//divElement.id="todo-id"
rootElement.appendChild(divElement4)

const inputElement4 = document.createElement("input")
inputElement4.type="checkbox"
inputElement4.className="todo-checkbox"
rootElement.appendChild(inputElement4)
divElement4.appendChild(inputElement4)

const spanElement4 = document.createElement("span")
spanElement4.innerHTML = item4.text
spanElement4.className="todo-text"
//spanElement4.className="todo complete"
rootElement.appendChild(spanElement4)
divElement4.appendChild(spanElement4)







//css needs: 
// for each object in the array,
//if the completed boolean === true
// change appearance






// const todoComplete = document.getElementsByClassName("todo complete")
// console.log(todoComplete)

// const getTaskCompletionStatus = (listOfArrayObjects) =>{
    

//     listOfArrayObjects.forEach(object => {
//         //console.log("user object from todoitem array", object)
//         const completionBoolean = object.completed
//         //console.log( "completion boolean", completionBoolean)

//         if (completionBoolean === true) {
//             console.log( "this task is complete!")

//         //     } else {
//         //         console.log("this task is NOT complete!")
//         }
//     })
//     return document.querySelector("todo").addClass("todo complete")
// }
// const completeOrIncomplete = getTaskCompletionStatus(todoItems)
// console.log("completeOrIncomplete", completeOrIncomplete)





// document.getElementsByClassName("todo-checkbox")onclick(function onClickComplete() {
//     document.getElementsByClassName("todo-text").addClass(".todo.complete")
// }
// )


    // document.getElementsByClassName("todo-checkbox").click(function() {
    //     document.getElementsByClassName.addClass("todo complete")
    // })


    //on click change boolean to true
    //if boolean is true, apply the styles class "todo complete"


//------------------------- jsfiddle i found----------------

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




//------- another js fiddle i found
  /* 1. Create functions that will take in an object
    Each function will return me a different field (should have 10 min in total), one function per field */

    const home1 = {
        type: "house",
        age: 1950,
        isBig: false,
        color: null,
        roofType: undefined,
        rooms: ["bedroom", "bathroom", "living room", "office"],
        floors: ["carpet", "tile", "hard wood"],
        howManyBedrooms: 3,
        howManyBathrooms: 2,
        capacity: undefined,
      }
      
      const home2 = {
        type: "apartment",
        age: 1970,
        isBig: true,
        color: undefined,
        roofType: null,
        rooms: ["bedroom", "bathroom", "living room", "office"],
        floors: ["tile", "carpet",],
        howManyBedrooms: 8,
        howManyBathrooms: 4,
        capacity: null,
      }
      
           const home3 = {
        type: "mansion",
        age: 2020,
        isBig: true,
        color: "white",
        roofType: "tile",
        rooms: ["bedroom", "bathroom", "living room", "office", "poolroom", "sitting room", "kitchen"],
        floors: ["marble", "rare wood", "fancy carpet"],
        howManyBedrooms: undefined,
        howManyBathrooms: 8,
        capacity: null,
      }
      
      console.log("home1: ", home1)
      console.log("--------------HomeType------------")
      
      const findHomeType = (typeOfHome) => {
          //console.log("home object", typeOfHome)
        return typeOfHome.type
       
      }
      
      const homeType = findHomeType(home1)
      console.log("this house is a/an: ",homeType)
 
			const homeType2 = findHomeType(home2)
      console.log("this house is a/an: ",homeType2)
      
      const homeType3 = findHomeType(home3)
      console.log("this house is a/an: ",homeType3)
      
      
      
      
      
      console.log("--------------HomeAge------------")
      
      const findHomeAge = (ageOfHome) => {
        return ageOfHome.age
       
      }
      
      const homeAge = findHomeAge(home1)
      console.log("this home was built in: ",homeAge)
 
			const homeAge2 = findHomeAge(home2)
      console.log("this home was built in ",homeAge2)
      
      const homeAge3 = findHomeAge(home3)
      console.log("this home was built in: ",homeAge3)
      
      
      
      
       console.log("--------------Homesize------------")
      
      const findHomeSize = (sizeOfHome) => {
        return sizeOfHome.isBig
       
      }
      
      const homeSize = findHomeSize(home1)
      console.log("this home is big: ",homeSize)
 
			const homeSize2 = findHomeSize(home2)
      console.log("this home is big ",homeSize2)
      
      const homeSize3 = findHomeSize(home3)
      console.log("this home is big: ",homeSize3)
      
      
      
      
        console.log("--------------Homesize------------")
      
      const findHomeColor = (colorOfHome) => {
        return colorOfHome.color
       
      }
      
      const homeColor = findHomeColor(home1)
      console.log("The color of this house is: ",homeColor)
 
			const homeColor2 = findHomeColor(home2)
      console.log("The color of this house is: ",homeColor2)
      
      const homeColor3 = findHomeColor(home3)
      console.log("The color of this house is: ",homeColor3)
      
      
      
      
      console.log("--------------RoofType------------")
      
      const findHomeRoofType = (homeRoofType) => {
        return homeRoofType.roofType
       
      }
      
      const typeOfRoof = findHomeRoofType(home1)
      console.log("type of roof: ",typeOfRoof)
 
			const typeOfRoof2 = findHomeRoofType(home2)
      console.log("type of roof:",typeOfRoof2)
      
      const typeOfRoof3 = findHomeRoofType(home3)
      console.log("type of roof: ",typeOfRoof3)
      
      
      
       console.log("--------------Rooms------------")
      
      const findHomeRooms = (roomsOfHome) => {
        return roomsOfHome.rooms
       
      }
      
      const listOfRooms = findHomeRooms(home1)
      console.log("list of rooms: ",listOfRooms)
 
			const listOfRooms2 = findHomeRooms(home2)
      console.log("list of rooms:",listOfRooms2)
      
      const listOfRooms3 = findHomeRooms(home3)
      console.log("list of rooms: ",listOfRooms3)
      
      
      
      
            console.log("--------------Floors------------")
      
      const findHomeFloorTypes = (typesOfHomeFlooring) => {
        return typesOfHomeFlooring.floors
       
      }
      
      const listOfFloors = findHomeFloorTypes(home1)
      console.log("list of floors: ",listOfFloors)
 
			const listOfFloors2 = findHomeFloorTypes(home2)
      console.log("list of floors: ",listOfFloors2)
      
      const listOfFloors3 = findHomeFloorTypes(home3)
      console.log("list of floors: ",listOfFloors3)
      
      
      
      
       console.log("--------------HowManyBedRooms------------")
      
      const findHowManyBedroomsInHome = (howManyBedrooms) => {
        return howManyBedrooms.howManyBedrooms
       
      }
      
      const numberOfBedrooms = findHowManyBedroomsInHome(home1)
      console.log("number of bedrooms: ",numberOfBedrooms)
 
			const numberOfBedrooms2 = findHowManyBedroomsInHome(home2)
      console.log("number of bedrooms: ",numberOfBedrooms2)
      
      const numberOfBedrooms3 = findHowManyBedroomsInHome(home3)
      console.log("number of bedrooms: ",numberOfBedrooms3)
      
      
      
      
      console.log("--------------HowManyBathRooms------------")
      
      const findHowManyBathroomsInHome = (howManyBathrooms) => {
        return howManyBathrooms.howManyBathrooms
       
      }
      
      const numberOfBathrooms = findHowManyBathroomsInHome(home1)
      console.log("number of bathrooms: ",numberOfBathrooms)
 
			const numberOfBathrooms2 = findHowManyBathroomsInHome(home2)
      console.log("number of bathrooms: ",numberOfBathrooms2)
      
      const numberOfBathrooms3 = findHowManyBathroomsInHome(home3)
      console.log("number of bathrooms: ",numberOfBathrooms3)
      
      
      
       
      console.log("--------------HomeCapacity------------")
      
      const findCapacityOfHome = (homeCapacity) => {
        return homeCapacity.capacity
       
      }
      
      const howMuchCapacity = findCapacityOfHome(home1)
      console.log("capacity of home: ",howMuchCapacity)
 
			const howMuchCapacity2 = findCapacityOfHome(home2)
      console.log("capacity of home: ",howMuchCapacity2)
      
      const howMuchCapacity3 = findCapacityOfHome(home3)
      console.log("capacity of home: ",howMuchCapacity3)
      
      
      console.log("--------------Bedroom Override------------")
      
    /*  home1.howManyBedrooms = 200
      console.log("home1 after bedroom number change", home1) */
      
      
      const overRideHomeBedroomNumber = (numberOfBedroomsUpdated) => {
      	
        return numberOfBedroomsUpdated
      }
      const updatedBedrooms = overRideHomeBedroomNumber(home1.howManyBedrooms = 250)
      console.log("number of bedrooms after updating", updatedBedrooms)
      console.log("number of bedrooms after updating", home1)
      
      
      
      
        console.log("--------------HomeType Override------------")
      
 
      
      
      const overrideHomeType = (homeTypeUpdated) => {
      	
        return homeTypeUpdated
      }
      const updatedHomeType = overrideHomeType(home1.type = "shack")
      console.log("home type after updating", updatedHomeType)
      console.log("home type after updating", home1)
      
      
      
      console.log("--------------HomeAge Override------------")
      
 
      
      
      const overrideHomeAge = (homeAgeUpdated) => {
      	
        return homeAgeUpdated
      }
      const updatedHomeAge = overrideHomeAge(home1.age = 2015)
      console.log("home age after updating", updatedHomeAge)
      console.log("home age after updating", home1)
      
      
      
        console.log("--------------Home Capacity Override------------")
      
 
      
      
      const overrideHomeCapacity = (homeCapacityUpdated) => {
      	
        return homeCapacityUpdated
      }
      const updatedHomeCapacity = overrideHomeCapacity(home1.capacity = "big")
      console.log("home capacity after updating", updatedHomeCapacity)
      console.log("home capacity after updating", home1)
      
      
      
       console.log("--------------Home Color Override------------")
      
 
      
      
      const overrideHomeColor = (homeColorUpdated) => {
      	
        return homeColorUpdated
      }
      const updatedHomeColor = overrideHomeColor(home1.color = "pink")
      console.log("home color after updating", updatedHomeColor)
      console.log("home color after updating", home1)
      
      
       console.log("--------------Home Color Override------------")
      
 
      
      
      const overrideHomeFloor = (homeFloorUpdated) => {
      	
        return homeFloorUpdated
      }
      const updatedHomeFloor = overrideHomeColor(home1.floors = undefined)
      console.log("home flooring after updating", updatedHomeFloor)
      console.log("home flooring after updating", home1)
      
      
      
      
      console.log("--------------Home bathroom Override------------")
      
 
      
      
      const overrideHomeBathrooms = (homeBathroomUpdated) => {
      	
        return homeBathroomUpdated
      }
      const updatedHomeBathroom = overrideHomeColor(home1.howManyBathrooms = 1)
      console.log("home flooring after updating", updatedHomeBathroom)
      console.log("home flooring after updating", home1)
      
      
      
      
         console.log("--------------Home size Override------------")
      
 
      
      
      const overrideHomeSize = (homeSizeUpdated) => {
      	
        return homeSizeUpdated
      }
      const updatedHomeSize = overrideHomeSize(home1.isBig = true)
      console.log("home flooring after updating", updatedHomeSize)
      console.log("home flooring after updating", home1)
      
      
      
      
      
      console.log("--------------Home roof type Override------------")
      
 
      
      
      const overrideHomeRoofType = (homeRoofTypeUpdated) => {
      	
        return homeRoofTypeUpdated
      }
      const updatedHomeRoofType = overrideHomeSize(home1.roofType = null)
      console.log("home flooring after updating", updatedHomeRoofType)
      console.log("home flooring after updating", home1)
      
      
      
      console.log("--------------Home rooms Override------------")
      
 
      
      
      const overrideHomeRooms = (homeRoomsUpdated) => {
      	
        return homeRoomsUpdated
      }
      const updatedRoomsType = overrideHomeSize(home1.rooms = ["toilet room", "fancy room", "banana room"])
      console.log("home flooring after updating", updatedRoomsType)
      console.log("home flooring after updating", home1)