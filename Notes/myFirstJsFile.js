// This is a comment

/*
This is a multi line comment
I can add a lot of lines here
for free
*/

// Data types
// string
// number
// boolean
// null
// undefined
// arrays
// functions

// data types
const name = 'victoria portela' //assignment
const name2 = 'tom'
const name3 = 'pancake'
const name4 = 'hewwo'

console.log("name: ", name1)
console.log("name: ", name2)
console.log("name: ", name3)

const myNumber = 123123123 // number
console.log("My number: ", myNumber)


console.log( name4 , name1)
console.log( name4 , name2)
console.log( name4 , name3)

console.log( name4 + name1)
console.log( name4 + ': ' + name1)


//----------- boolean ----------------------


const isHappy = false // boolean
const isHungry = true // boolean
console.log("isHappy: ", isHappy)
console.log("isHungry: ", isHungry)

const iAmNothing = null
console.log("iAmNothing: ", iAmNothing)
const iAmAlsoNothing = undefined
console.log("iAmAlsoNothing: ", iAmAlsoNothing)

// --------------------------- arithmetics ----------------
// + - * / > < >= <=

// string arithmetics
const chairName = "big chair"
const chairColor = "red"
const newVar = chairName + chairColor
console.log("newVar: ", newVar)

// number arithmetics
const firstNumber = 1
const secondNumber = 2
const newNumber = firstNumber + secondNumber
console.log("newNumber: ", newNumber) 

console.log("i am a string " - null)
console.log("i am a string " + undefined)

//variable arithmetics
const bob = 5
const tom = 1

console.log (bob + tom)
console.log (bob / tom)
console.log (bob x tom)
console.log (bob - tom)


const bob = 5
const tom = 1
const bobtom = bob + tom
const newResult = "new result: " + bobtom


console.log(bob + tom)
console.log(bob / tom)
console.log(bob * tom)
console.log(bob - tom , "subtracting")

console.log("adding " + bob + " + " + tom + " which gives me : " + (bob + tom))

console.log(newResult)


console.log("i am a string" + null)
console.log("i am a string" + undefined)


const comparison = 100 === 100
console.log("comparison: ", comparison) // this will be true

const comparison = 100 === '100' 
console.log("comparison: ", comparison) //this will be false because second 100 is now a string

const comparison = 100 == '100' 
console.log("comparison: ", comparison) //this will be true because double == means 
// its the /content/ equivilent, ignoring the data type. 



// USERS
// NAME(string) ---- AGE(number) -- IS_HAPPY (boolean) -- IS_HUNGRY (boolean)
// Lucas              28               true /false          true
// Victoria         ..                  ..                  null


// (Adding) (num1) to (number2), which gives me: (result)

const myAge = 28 // create an immutable variable
console.log("myAge: ", myAge)

// myAge = 29 // NOT ALLOWED!!!!
// console.log("myAge after changing: ", myAge)

let yourAge = 28
console.log("yourAge: ", yourAge)

yourAge = 29
console.log("yourAge after changing: ", yourAge)

