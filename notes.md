Day 1:
- this is a bullet
    - this is an indented bullet using 4 spaces

Learning foundations of JS

[Lucas's portfolio](https://github.com/lgc13/LucasCosta_portfolio)

- single '=' does not mean equality, it means assignment.
- equality is shown by '===' three equals denote equality
- // is how you write comments in JS
- a thing followed by () is always a function
- strings are allowed to have spaces

Homework: 
read and try more data types in JS

-Numbers: a string with no quotes around it
-boolean

you can console log anything, so try to console log the other variable types

Day 2: 

Data Types
- string is quotes around plain text
- number is numbers or a series of numbers with no quotes
- booleans are true/false statements 
 ex. const isHappy = false // boolean
 const isHungry = true // boolean
 - Null means nothing, like when you put 0 in an excel sheet, you have to put something you cant just leave things blank. however 0 and null are different.
 - undefined is similar to null (for now but not rlly)
 -object 

 
 exercise on your own: play around with the other data types the way that you played with the numbers and stuff. 


Arrays
    - a collection of things
    - in JS theyre also known as lists
    - array === list


Day 3 homework:
    look up "coding modulus". See what it does and what it means for JS
    complete the challenge: 
     
     create a list with 10 numbers
     iterate through all values in the list, and add + 10 to each value
     expected output: 'adding 10 to the value: {currentvalue}, which gives me: {nernumber}

     it should say whether its even or odd


     Day 4: 
     OPERANDS: 
     -Similar to nouns.

     "resolves to a value" is basically just saying that a value has been produced.

     1+1 "resolves to" 2 which is another way to say that it has the value of 2.

     Expressions are made up of operands (such as the number 1 or variable x)
     Operators are like = or + 

     operands can be any data type in JS as well as objects or arrays. 

     In the example: 
     console.log(13 % 5);
     //expected output 3

     why the fuck is it 3?? 13 % 5 is 2.6
     what does "always takes the sign of the dividend" mean? does it mean if it is a number, it will be a number? but that is the data type. what is the sign? help. 


     homework: 
     no googling 

     find the largest and smallest number in a list
     assume the list size is x, solution cannot be hard coded. 
     assume the items in the list are not in order. 
     assume the items in the list could very well be negative numbers or decimals. 

     ex: 50, -2, 0 , 100, 7... etc

     expected output: 
     largest number: 100
     smallest number: -2

     next problem:

     FizzBuzz
     take a list with numbers, in numerical order (1-100 for example but dont actuall hardcode 1-100)

     whenever a number is NOT divisible by 3 or 5 print out the number
     whenever  a number is divisible by 3 we want to print out the word "fizz"
     whenever a number is divisible by 5 we want to print out the word "buzz"
     whenever a number is divisible by 3 and 5 we want to print out the word "fizzbuzz" 
     

     example 1, 2, 3, 4, 5, 6

     expect: 
     1
     2
     fizz
     4
     buzz
     fizz

     you can start with the code in discord for fizzbuzz 