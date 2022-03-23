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

console.log(`adding numbers from ${somenumbers}`, someNumbers[0] + somenumbers[1])

/* prompt: create a list of 10 numbers
//give me the sum of all 10 numbers
//give me the total of all 10 numbers subtracted by one another
//give me the total of all 10 numbers multiplied by one another
//give me the total of all 10 numbers divided by one another
//ex: list 1, 2, 3
expect:
sum: 6
subtraction: 2
multiplication: 6
division: 0.16
*/

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

console.log("Sum of all numbers equals: ", numbers[0] + numbers[1] + numbers[2] + 
numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9])

console.log("Subtraction of all numbers equals: ", numbers[0] - numbers[1] - numbers[2] - 
numbers[3] - numbers[4] - numbers[5] - numbers[6] - numbers[7] - numbers[8] - numbers[9])

console.log("Multiplication of all numbers equals: ", numbers[0] * numbers[1] * numbers[2] * 
numbers[3] * numbers[4] * numbers[5] * numbers[6] * numbers[7] * numbers[8] * numbers[9])

console.log("Division of all numbers equals: ", numbers[0] / numbers[1] / numbers[2] / 
numbers[3] / numbers[4] / numbers[5] / numbers[6] / numbers[7] / numbers[8] / numbers[9])

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numTotal = 0
console.log("numTotal: ", numTotal )
numbers.forEach(number => {
    numTotal = numTotal + number
  console.log("numTotal in forEach: ", numTotal )
})
console.log("numTotal at the end: ", numTotal )