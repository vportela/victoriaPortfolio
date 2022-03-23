function definition / declaration: where it was created, telling us what it does (the very first line, where you create the function)
function input (variables): you declare the variable input.
function output: what it might return.
calling a function
*/

/* const entreePrice = 20
const drinkPrice = 15
 */
//functions refer to some "action" that you want to do multiple times.
//There fore, its name should usually be something with a verb.




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