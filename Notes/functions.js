
/*
    Function signature
        Function definition/declaration - where it was created/telling us what it does - it does NOT do anything on its own
        Function input - declare how many, what variables are called in this function
        Function output - what it MIGHT return
    ------
    Calling a function
*/

// const entrePrice = 20
// const drinkPrice = 5
// // add them
// const result = entrePrice + drinkPrice

/* they refer to some 'action' that you want to do multiple times
    therefore, its name should usally be something with a verb
*/

/* const entreePrice = 20
const drinkPrice = 15
 */
//functions refer to some "action" that you want to do multiple times.
//There fore, its name should usually be something with a verb.



function takeThingToTheTable(x) { // x = 20

    console.log("hello, I'm inside the function!")
    console.log("taking X thing to the table....", x)

    console.log("__________________________")
    return "i am the string being returned from the function..."
}


const firstReturn = takeThingToTheTable("BANANA") // firstReturn = "i am the string being returned from the function..."
const secondReturn = takeThingToTheTable(20)
console.log("secondReturn: ", secondReturn)
const thirdReturn = takeThingToTheTable(true)
console.log("thirdReturn: ", thirdReturn)

console.log("firstReturn: ", firstReturn)
const secondReturn2 = takeThingToTheTable(20)
console.log("secondReturn2: ", secondReturn2)

console.log("-------------------")





function printOutThings(x){

console.log("hello, i'm inside the function!")
console.log("i was given a variable x: ", x)

console.log("____________________")
return "i am the string being returned from the function..."
}

const outPut1 = printOutThings(" HELLO, I'm X from the first function call")
printOutThings(20)
printOutThings(true)

console.log("outPut1", outPut1)




// ------------------------ function arithmetic --------------------------




function addNumbers(x, y) { // es5
    console.log("in addNumbers, x: ", x, " y: ", y)
    const sumTotal = x + y
    return sumTotal
}

const addNumbers2 = (x, y) => {
    const sumTotal = x + y
    return sumTotal
}

function sayHello() {
    return "Hello World"
}

const sayHello2 = () => {
    return "Hello World"
}



const result1 = addNumbers(4, 2)
console.log("result1: ", result1)





const result2 = addNumbers(5, 10)
console.log("result2: ", result2)

const result3 = addNumbers(1, 12)
console.log("result3: ", result3)

console.log("-------")
function printsNumbers(numbers) {
    console.log("numbers: ", numbers)

    const anotherArray = []
    numbers.forEach(number => {
        anotherArray.push("I am the number... : ", number)
    });

    return anotherArray
}

const result = printsNumbers([1, 2, 3])
console.log("result: ", result)