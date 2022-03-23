/*
Create a list of all even numbers X
create another list with all odd numbers X
create another list with all even numbers AND numbers that are divisible by 15
Create a list where numbers are between 20 and 30 inclusive
create a list where numbers are between 10-20 inclusive or 30-40 inclusive
completed 3/8/2022
*/

const numbers = Array(100).fill(0).map((e, i) => i + 1)
console.log("numbers: ", numbers)

const evenNumbers = []
const oddNumbers = []
const evenDivisible = []
const twentyToThirtyInc = []
const twentyToTwentyORThirtyToFourtyInc = []

numbers.forEach(number => {
  if(number % 2 === 0) {
   evenNumbers.push(number)
  }
})
console.log("These are even numbers: ", evenNumbers) 

numbers.forEach(number => {
  if(number % 3 === 0) {
   oddNumbers.push(number)
  }
})
console.log("These are odd numbers: ", oddNumbers)

numbers.forEach(number => {
  if(number % 2 === 0 && number % 15 === 0) {
   evenDivisible.push(number)
  }
})
console.log("These are even numbers that are divisible by 15: ", evenDivisible)

numbers.forEach(number => {
  if(number >= 20 && number <= 30) {
   twentyToThirtyInc.push(number)
  }
})
console.log("20-30 inclusive: ", twentyToThirtyInc)

numbers.forEach(number => {
  if(number >= 10 && number <= 20 || number >= 30 && number <= 40) {
   twentyToTwentyORThirtyToFourtyInc.push(number)
  }
})
console.log("10-20 or 20-40 inclusive: ", twentyToTwentyORThirtyToFourtyInc)
