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

//day 2 homework

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

const pet1 = "Bucky"
const pet2 = "Rocky"
const pet3 = "Nieve"


const pets = [ pet1, pet2, pet3] //list of strings
console.log("pets: ", pets)

const newList = [pet1, pet2, pet3, 9000, true]
console.log("newlist: ", newList)

// each thing in a list is called an "index". Indexes always start at 0 so in this case pet 1 (bucky) is index 0, rocky is index 1, etc. 

console.log("newlist index 0: ", newList[0])
console.log("newlist index 0: ", newList[1])




/* const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

numbers.forEach(number => console.log("adding 10 to the value: ", number, "which gives me: ", 10 + numbers))
*/

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

numbers.forEach(number => {
	console.log("adding 10 to the value: ", number, "which gives me: ", number + 10)
})

const numbers = [2, 13, 4, 20, 8, 20, 36, 47, 45, 53]

numbers.forEach(number => {
	console.log("adding 10 to the value: ", number, "gives me: ", number + 10, "which is ") 
	if ((number + 10) % 2 === 0){
		console.log("even")
	} else {
		console.log("odd")
	}
})


if (5 == "5") {
	console.log("equals")
}
if (5 === "5") {
	console.log("bleh")
}






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


// grading scale
/*
Take in a list of grades (0 - 100)

1: tell me the letter grade for each score [in an array]
2: Give the student (grade) a motivational sentence depending on their LETTER grade
 2.a: use if/else if/else statements
 2.b: use a switch statement
Ex:
numbers = [0, 100]

expected output: 

1. [[0, "F"], [1, "F"], [2, "F"], ..., [70, "D"], ... [80, "B"], ..., [95, "A"]]

2.
    A -> 'WOW YOURE AMAZINZ'
    B -> "...."
    C -> "...."
    D -> "something else...."
    F -> "YOU SUCK...."
   
*/
const numbers = []
const grades = []
for (let number = 0; number < 101; number++) {
    numbers.push(number)
}
console.log('numbers: ', numbers)

numbers.forEach(number => {
	if (number <= 50){
  		grades.push([number,"F"])
  } else if (number >=51 && number <=69){
  		grades.push([number,"D"])
  } else if (number >=70 && number <=79){
  		grades.push([number,"C"])
  } else if (number >=80 && number <=89){
  		grades.push([number,"B"])
  } else if (number >=90 && number <=100){
  		grades.push([number,"A"])
  }
} ) 
console.log("grades: " , grades)

/* grades.forEach(numberLetterArray => {
  if (numberLetterArray[1] === "A"){
      console.log( numberLetterArray[1], "- wow, u r my little pogchamp ")
  } else if (numberLetterArray[1] === "B"){
      console.log(`${numberLetterArray[1]} - pretty poggies`)
  } else if (numberLetterArray[1] === "C"){
      console.log(`${numberLetterArray[1]} - average pog`)
  } else if (numberLetterArray[1] === "D"){
      console.log(`${numberLetterArray[1]} - hm, pretty unpog`)
  } else if (numberLetterArray[1] === "F"){
      console.log(`${numberLetterArray[1]} - f in the chat boys`)
  } 
})

 */
 const iceCream = "chocolate"
 
 if(iceCream === "chocolate"){
 	console.log( "your favorite ice cream is chocolate")
 } else if (iceCream === "vanilla"){
 	console.log( "your favorite ice cream is vanilla")
 }
 
 switch(iceCream) {
 	case "vanilla": {
  	console.log("your favorite is vanilla!!!")
  }
 }
