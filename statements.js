/*
Core concepts:
if statement
comparisons
forEach
if/else else/if
switch statement
*/



// const stringComparison = "lucas" === "lucas"
// console.log("stringComparison: ", stringComparison)

// const numberComparison = 100 === "100"
// console.log("numberComparison ", numberComparison)

// const bolleanComparison = true === false
// console.log("bolleanComparison ", bolleanComparison)

// const nullComparison = null === undefined
// console.log("nullComparison ", nullComparison)

// const randomComparison = undefined === false
// console.log("randomComparison ", randomComparison)

// console.log(" --------------- ")

// ---------------------if statement---------------

if ("lucas" === "victoria") {
    console.log("this is true!")
} else {
  console.log("this is NOT true!!!")  
}

console.log(" --------------- ")

if (undefined) { 
    console.log("this is truthy") // truthy
} else { 
    console.log("this is falsey!!!")  
}

//------------ comparisons: do these two things equate? ---------

const comparison = 100 === 100
console.log("comparison: ", comparison) // this will be true

const comparison = 100 === '100' 
console.log("comparison: ", comparison) //this will be false because second 100 is now a string

const comparison = 100 == '100' 
console.log("comparison: ", comparison) //this will be true because double == means is the /content/ equivilent, ignoring the data type. 

// if statement. if whatever is inside the () is true then you get the result inside the curlies.

if ("lucas" === "lucas") {
	console.log( "this is true")
}


const nullComparison = null === undefined

if (nullComparison) {
    console.log("this is true!")
} else {
    console.log("this is NOT true!!!")
} // this will come out as "this is NOT true!!!"

// homework! take every data type

//string, number, boolean, null, undefined
//write one or two if/else hard coded statements for each data type.
//get a true and a false for each case
// experiment with things like does it matter if you caps one and not the other or spacing etc

//--------------day 2 homework------------

//"convention" means the common aesthetic generally agreed upon by the coding community about how you should space out and set up code.
//functions should not have a space, for example console.log() is a function, the () does not have a space between log and ()



//string
if ("dog" === " dog ") {
	console.log("this is true")
} else {
	console.log("this is not true")
}

if ("meow" === "meoww"){
	console.log("this is true")
} else {
	console.log("this is bullshit")
}
  
//number
if (3 === 33) {
	console.log("this is true")
} else {
	console.log("this not twuu")
}

if (22 === 22){
	console.log("this slaps")
} else {
	console.log("this does not slap")
}

//boolean
if (true){
	console.log("its bussin")
} else {
	console.log("its not bussin")
}

if (false){
	console.log("its bussin")
} else {
	console.log("it not bussin")
}

//null
if (null){
	console.log("this is true")
} else {
	console.log("this not true")
}
//Null and undefined are "falsy" because they are essentially nothing. They cannot be made true. 

//undefined
if (undefined){
console.log("this is true")
} else {
	console.log("this no twoo")
}


//for loops
//allows you to iterate through things
//they are particularly useful with lists
//usually list variable names end with an S to indicate there are multiple

const colors = ["red", "yellow", "blue", "orange", "pink" ]
console.log("colors: ", colors)

// the ask: print out every value in the list
// console.log("colors[0]: ", colors[0])
// console.log("colors[1]: ", colors[1])
// console.log("colors[2]: ", colors[2])
// console.log("colors[3]: ", colors[3])


const pet1 = "Bucky"
const pet2 = "Rocky"
const pet3 = "Nieve"


const pets = [ pet1, pet2, pet3] //list of strings
console.log("pets: ", pets)

const newList = [pet1, pet2, pet3, 9000, true]
console.log("newlist: ", newList)

// each thing in a list is called an "index". 
//Indexes always start at 0 so in this case pet 1 (bucky) is index 0, rocky is index 1, etc. 

console.log("newlist index 0: ", newList[0])
console.log("newlist index 0: ", newList[1])



//------------------ for each, if/else, equivilency --------------------


/* const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

numbers.forEach(number => console.log("adding 10 to the value: ", number, "which gives me: ", 10 + numbers))
*/
// create a list with at least 10 numbers
// iterate through all values in the list, and add + 10 to each value
// expected output: `adding 10 to value: {currentValue}, which gives me: {newNumber}`
// 1, 5, 20
// `adding 10 to value: 1, which gives me: 11`
// `11 is odd`
// `adding 10 to value: 5, which gives me: 15`
// `15 is odd`
// `adding 10 to value: 20, which gives me: 30`
// `30 is even`



//proper solution to the problem
const numbers = [15, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = 2

console.log("numTotal: ", result )
numbers.forEach(number => {
	console.log("this is a number test: ", number)
	if (number === numbers[0]){
  	result = number
  	console.log("if number 0 is 1", result)
  } else {
  	result = result - number
  	console.log("result in forEach: ", result )
  }
	
})
console.log("result at the end: ", result )


const result = 300 % 2 // give me the remainder of 300 / 2
if (result === 0) {
    console.log("this is even")
}

// 3.5 % 2 = // 3.5 / 2 = 1
// 3.5 - 2 = 1.5
// 3.5 % 2 = 1.5




// ------------------------------ more if else statements ----------------

onst favoriteIceCream = "oreos"

if (favoriteIceCream === "chocolate") {
    console.log("your favorite is chocolate!")
} else if (favoriteIceCream === "vanilla") {
    console.log("your favorite is vanilla!")
} else if (favoriteIceCream === "mint") {
    console.log("your fave is mint!")
} 

if (favoriteIceCream === "mint") {
    console.log("HAHA IT IS DEFEINITELY MINT!")
} else {
    console.log("Idk what your fave is....")
}


//--------------------------- switch statements ----------------------


console.log("----------- switch ---------------")

switch(favoriteIceCream) {
    case "chocolate": {
        console.log("your favorite is chocolate!")
        break
    }
    case "vanilla": {
        console.log("your favorite is vanilla!")
        break
    }
    case "mint": {
        console.log("your fave is mint!")
        break
    }
    default: {
        console.log("Idk what your fave is....")
    }
}


const grades = [[100, "A"], [80, "B"], [70, "C"]]

grades.forEach(gradeArray => {
    switch (gradeArray[1]) {
        case "A": {
            console.log("YOU GOT AN A!!")
            break
        }
        case "B": {
            console.log("You got a B...")
            break
        }
    }
})
