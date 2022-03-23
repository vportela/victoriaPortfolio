
/* - Functions Requirements
   1. call every function at least 3 times
   2. Print out the RESULT (returned value) // OUTSIDE THE FUNCTION

1. Do standard math arithmetics (+, -, *, /)
Inputs:         2 numbers
Output:         1 number */

/* 2. Check if number is even/odd

Input:   1 number
Output: "Even" or "Odd"

Example: calling function with (1) should print out "Odd" */

/* 3. Find the smallest in the array

Input: 1 array of size 100
Output: 1 number

Example: calling with functions from 1- 100 prints out 1
 */
 
/*  3. Find the smallest in the array
 
 Input: 1 array of size 100
 Output: 1 number
 
 Example: calling with functions from 1- 100 prints out 1
  */
 

 function adding (x, y) {
    const addSum = (x+y)
  
    return addSum
  }
  const addition = adding(3,6)
  console.log("adding 3+6=", addition)
  const addition2 = adding(2,3)
  console.log("adding 1+3=", addition2)
  const addition3 = adding(2,2)
  console.log("adding 2+2=", addition3)
  
  console.log(" --------------")
  
  
  function arithmetic2 (x, y) {
    const subtract = (x-y)
  
    return subtract
  }
  const subtract = arithmetic2(3,6)
  console.log("subtracting 3-6=", subtract)
  const subtract2 = arithmetic2(2,3)
  console.log("subtracting1-3=", subtract2)
  const subtract3 = arithmetic2(2,2)
  console.log("subtracting2-2=", subtract3)
  
  
  console.log(" --------------")
  
  
  function arithmetic3 (x, y) {
    const multiplication = (x*y)
  
    return multiplication
  }
  const multiplication = arithmetic3(3,6)
  console.log("multiplying 3-6=", subtract)
  const multiplication2 = arithmetic3(2,3)
  console.log("multiplying 1-3=", subtract2)
  const multiplication3 = arithmetic3(2,2)
  console.log("multiplying 2-2=", subtract3)
  
  
  console.log(" --------------")
  
  
  function arithmetic4 (x, y) {
    const division = (x/y)
  
    return division
  }
  const result1 = arithmetic4(3,6)
  console.log("dividing 3-6=", result1)
  const division2 = arithmetic4(2,3)
  console.log("dividing 1-3=", division2)
  const division3 = arithmetic4(2,2)
  console.log("dividing 2-2=", division3)
  
  
  console.log(" --------------")
  
  
  
  function isNumberEvenOrOdd (x) {
      if (x % 2 === 0){
        return "even"
    } else {
        return "odd"
    } 
  }
  const evenOrOdd = isNumberEvenOrOdd(5)
  console.log(" 5 is", evenOrOdd)
  const evenOrOdd2 = isNumberEvenOrOdd(-12)
  console.log(" -12 is", evenOrOdd2)
  const evenOrOdd3 = isNumberEvenOrOdd(378)
  console.log(" 378 is", evenOrOdd3)
  
  
  
  console.log(" --------------")
  
  
  
  
  
  
  
  
  
  const oneToOnehundred = Array(100).fill(0).map((e, i) => i + 1)
  
  
  
  
  
  function fullArray (x) {
      oneToOnehundred.forEach(x => {
        if (x > 0) {
      return x, "is greater than 0"
      }
    })
  
  }
  const allnumber = fullArray(oneToOnehundred)
  console.log(oneToOnehundred)


  //FINISHED SOLUTIONS

  /* - Functions Requirements
   1. call every function at least 3 times
   2. Print out the RESULT (returned value) // OUTSIDE THE FUNCTION

1. Do standard math arithmetics (+, -, *, /)
Inputs:         2 numbers
Output:         1 number */

/* 2. Check if number is even/odd

Input:   1 number
Output: "Even" or "Odd"

Example: calling function with (1) should print out "Odd" */

/* 3. Find the smallest in the array

Input: 1 array of size 100
Output: 1 number

Example: calling with functions from 1- 100 prints out 1
 */
 
/*  3. Find the smallest in the array
 
 Input: 1 array of size 100
 Output: 1 number
 
 Example: calling with functions from 1- 100 prints out 1
  */
console.log("---------------Adding-----------------")

function adding(x, y) {
  const addSum = (x+y)
  return addSum
}
const addition = adding(3,6)
console.log("adding 3+6=", addition)
const addition2 = adding(2,3)
console.log("adding 1+3=", addition2)
const addition3 = adding(2,2)
console.log("adding 2+2=", addition3)

console.log(" ------------subtracting--------------")
  
  
  function arithmetic2(x, y) {
    const subtract = (x-y)
  
    return subtract
  }
  const subtract = arithmetic2(3,6)
  console.log("subtracting 3-6=", subtract)
  const subtract2 = arithmetic2(2,3)
  console.log("subtracting1-3=", subtract2)
  const subtract3 = arithmetic2(2,2)
  console.log("subtracting2-2=", subtract3)
  
  
  console.log(" --------------Multiplying----------------")
  
  
  function arithmetic3(x, y) {
    const multiplication = (x*y)
  
    return multiplication
  }
  const multiplication = arithmetic3(3,6)
  console.log("multiplying 3-6=", subtract)
  const multiplication2 = arithmetic3(2,3)
  console.log("multiplying 1-3=", subtract2)
  const multiplication3 = arithmetic3(2,2)
  console.log("multiplying 2-2=", subtract3)
  
  
  console.log(" -------------dividing------------")
  
  
  function arithmetic4 (x, y) {
    const division = (x/y)
  
    return division
  }
  const result1 = arithmetic4(3,6)
  console.log("dividing 3-6=", result1)
  const division2 = arithmetic4(2,3)
  console.log("dividing 1-3=", division2)
  const division3 = arithmetic4(2,2)
  console.log("dividing 2-2=", division3)
  
  
  console.log(" ------------even or odd----------------")
  
  
  
  function isNumberEvenOrOdd (x) {
      if (x % 2 === 0){
        return "even"
    } else {
        return "odd"
    } 
  }
  const evenOrOdd = isNumberEvenOrOdd(5)
  console.log(" 5 is", evenOrOdd)
  const evenOrOdd2 = isNumberEvenOrOdd(-12)
  console.log(" -12 is", evenOrOdd2)
  const evenOrOdd3 = isNumberEvenOrOdd(378)
  console.log(" 378 is", evenOrOdd3)
  
  
  
  console.log(" ----------find largest number----------")
  

 /*  
 This solution appears to give the answer but it is giving "0+1".
  const oneToOnehundred = Array(100).fill(0).map((e, i) => i + 1)
  
  
  function smallestNumber (x) {
      oneToOnehundred.forEach(x, index => {
        if (x > oneToOnehundred[index+1]) {
      return x
      }
    })
  
  }
   const smallest = oneToOnehundred[0]
   console.log("the smallest number in the array is: ", smallest)
   
   
   */

  
  /* const numbers = Array(100).fill(0).map((e, i) => i + 1)
  
  let largestNumber = numbers[0]
  
      numbers.forEach((number) => {
      
      if(number > largestNumber) {
        console.log("number: ", number, "is greater than: ", largestNumber)
        largestNumber = number
      }
      
    })
  
  
  console.log("largestnumber: ", largestNumber)
  */
 

const oneToOneHundred = Array(100).fill(0).map((e, i) => i + 1)
const testArray1 = [1, 6, 13, 267, -289, 2, 5]
const testArray2 = [4, 13, 56, 29, 46, 23, 78]

function largestNumberInList(arrayOfNumbers) {  //x equals array
	//console.log("inside largest number in list with x", arrayOfNumbers)
  
	let largestNumberInArray = arrayOfNumbers[0]
  
	arrayOfNumbers.forEach(number => {
  	//console.log("in the 4each number is: ", number) //number equals 1
    if (number > largestNumberInArray){
    	//console.log("number", number, "is greater than largestNumberInArray", largestNumberInArray )
      largestNumberInArray = number
    }
	     
  })
  return largestNumberInArray
}
const largestNumber = largestNumberInList(oneToOneHundred)
console.log("The largest number in the array is: ", largestNumber)

const largestNumber2 = largestNumberInList(testArray1)
console.log("The largest number in the array is: ", largestNumber2)

const largestNumber3 = largestNumberInList(testArray2)
console.log("The largest number in the array is: ", largestNumber3)


console.log("--------------find smallest number-----------------")
  
 
const oneToOneHundred2 = Array(100).fill(0).map((e, i) => i + 1)
const testArray3 = [1, 6, 13, 267, -289, 2, 5]
const testArray4 = [4, 13, 56, 29, 46, 23, 78]

function smallestNumberInList(arrayOfNumbers) {  //x equals array
  //console.log("inside smallest number in list with x", arrayOfNumbers)
  
  let smallestNumberInArray = arrayOfNumbers[0]
  
  arrayOfNumbers.forEach(number => {
    //console.log("in the 4each number is: ", number) //number equals 1
    if (number < smallestNumberInArray){
      //console.log("number", number, "is greater than smallestNumberInArray", smallestNumberInArray )
      smallestNumberInArray = number
    }
       
  })
  return smallestNumberInArray
}
const smallestNumber = smallestNumberInList(oneToOneHundred)
console.log("The smallest number in the array is: ", smallestNumber)

const smallestNumber2 = smallestNumberInList(testArray3)
console.log("The smallest number in the array is: ", smallestNumber2)

const smallestNumber3 = smallestNumberInList(testArray4)
console.log("The smallest number in the array is: ", smallestNumber3)


console.log("-----------Grade Score Range--------------------")


/* 5. Give a grade range depending on given letter score using a switch statement

Input: 1 letter (string)
Output: 1 string

Example: 
calling with functions with A prints out "90-100"
calling with functions with B prints out "80-89"
calling with functions with F prints out "0-59" */


function assigningLetterGradeToScore(grade) {
  //console.log("these are grades", score)

  if(grade === "A"){
    //console.log("90-100")
    return "90-100"
  } else if (grade === "B"){
    return "80-89"
  }
  else if (grade === "C"){
    return "70-79"
  }
 }

function assigningLetterGradeToScoreWithSwitch(grade){
	switch(grade){
  	case "A": {
    	return "90-100"
    }
    case "B":{
    	return "80-89"
    }
    case "C": {
    	return "70-79"
    }
    default:{
    	console.log("no grade available")
    }
  }
}
const score = assigningLetterGradeToScoreWithSwitch("A")
console.log("score", score)
const score2 = assigningLetterGradeToScoreWithSwitch("B")
console.log("score", score2)
const score3 = assigningLetterGradeToScoreWithSwitch("C")
console.log("score", score3)



console.log("--------------sum of all numbers in array-----------------")

/* 6. Given an array of numbers, give me the sum of all of them together

Input: 1 array
Output: 1 number

Example: 

given [1, 2, 3, 4]
should output: 10 */


const numberArray = [1, 2, 3, 4]
const numberArray2 = [1, 5, 3, 7]
const numberArray3 = [1, 20, 3, 42]

function sumOfAllNumbersInArray(arrayOfNumbers) {
	//console.log(numberArray)
	let finalSum = 0
	//console.log("finalSum",finalSum )
	arrayOfNumbers.forEach(number =>{
  	finalSum = finalSum + number
    //console.log("finalSum",finalSum)
  
  })
	return finalSum
}

const answer = sumOfAllNumbersInArray(numberArray)
console.log("final answer:", answer)
const answer2 = sumOfAllNumbersInArray(numberArray2)
console.log("final answer:", answer2)
const answer3 = sumOfAllNumbersInArray(numberArray3)
console.log("final answer:", answer3)

console.log("---------------subtraction of all numbers in array----------------")


/* 7. Given an array of numbers, find the subtraction of all numbers together

Input: 1 array
Output: 1 number

Example: 

given [1, 2, 3, 4]
should output: -8 */

const firstArray = [1, 2, 3, 4]
const secondArray = [1, 5, 3, 7]
const thirdArray = [1, 20, 3, 42]

function subtractionOfAllNumbersInArray(arrayOfNumbers) {
	//console.log(numberArray)
	let finalSum = arrayOfNumbers[0]
	console.log("arrayOfNumbers", arrayOfNumbers)
	arrayOfNumbers.forEach((number, index) =>{
  	/* console.log("number", number)
  	    console.log("index", index)
  	
  	console.log(number,finalSum) */
    
    if (index !== 0) {
        finalSum = finalSum - number
        }
  
  })
	return finalSum
}

const finalAnswer = subtractionOfAllNumbersInArray(firstArray)
console.log("final answer:", finalAnswer)
const finalAnswer2 = subtractionOfAllNumbersInArray(secondArray)
console.log("final answer:", finalAnswer2)
const finalAnswer3 = subtractionOfAllNumbersInArray(thirdArray)
console.log("final answer:", finalAnswer3)

/* 8. Food menu! Given an entree, drink, and dessert, figure out the total cost of a bill after a 7% tax

Input: 3 numbers (entree, drink, and desser prices)
Output: 1 number

Example:

given 10, 5, 3 (entree cost 10, drink 5, and dessert 3)
should output: 19.26 */


console.log("---------------Bill plus tax----------------")


function findBillTotal(entreePrice, drinkPrice, dessertPrice){


   const addItems = entreePrice + drinkPrice + dessertPrice
   const tax = 7/100 * addItems
   const billWithTax = tax + addItems
   return billWithTax

}

const finalBill = findBillTotal(10, 5, 3)
console.log("finalBill1: ", finalBill)
const finalBill2 = findBillTotal(10, 6, 3)
console.log("finalBill1: ", finalBill2)
const finalBill3 = findBillTotal(10, 13, 3)
console.log("finalBill1: ", finalBill3)


console.log("--------------Bill with discount-----------------")

/* 9. Discounts! when buying an item with a coupon, figure out the final price after a X% discount, adding a flat 7% tax afterwards (the tax is applied on the amount AFTER being discounted, not before)

Input: 2 numbers (item cost and coupon amount)
Output: 1 number

Example:

Given 1000, 20 ($1000 item, 20% discount)
Should output: $786 */

function findshoppingWithDiscountTotal(itemPrice,discount){


  const discountPrice = discount/100 * itemPrice
  const itemMinusDiscount = itemPrice - discountPrice
  //console.log("itemMinusDiscount",itemMinusDiscount)
  const billWithTax = 7/100 * itemMinusDiscount
  const finalresult = billWithTax + itemMinusDiscount

  //console.log("discount", discountprice)
  return finalresult

}

const finalBillWithDiscount = findshoppingWithDiscountTotal(1000,20)
console.log("finalBill: ", finalBillWithDiscount)




//read or watch videos on JS objects
