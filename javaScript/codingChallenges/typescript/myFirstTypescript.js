"use strict";
exports.__esModule = true;
var myName = "victoria";
var myFavNumber = 5;
var isHappy = true;
var nullVariable = null;
var undefinedVariable = undefined;
var favriteColors = ["red", "blue", "pink"];
var favoriteNumbers = [2, 56765, 3, 567, 43];
var person = {
    name: "victora",
    age: 26,
    isHappy: true
};
var myfunction = function (someParameter) {
    console.log("myFunction - hello there someParameter", someParameter);
};
myfunction("i am the parameter! meow!");
var myFunction2 = function (event) {
    console.log("myFunction2 - event", event);
};
var myEventObject = {
    target: {
        value: "i am a string value"
    }
};
myFunction2(myEventObject);
var Hobby;
(function (Hobby) {
    Hobby[Hobby["GAMING"] = 0] = "GAMING";
    Hobby[Hobby["DRAWING"] = 1] = "DRAWING";
    Hobby[Hobby["EATING"] = 2] = "EATING";
    Hobby[Hobby["SLEEPING"] = 3] = "SLEEPING";
})(Hobby || (Hobby = {}));
var person2 = {
    firstName: "victoria",
    lastName: "portela",
    favoriteColor: "red",
    age: 26,
    isHappy: true,
    favoriteHobby: Hobby.GAMING,
    hobbies: [Hobby.DRAWING, Hobby.EATING]
};
console.log("my name is", myName);
console.log("my myFavNumber", myFavNumber);
console.log("isHappy", isHappy);
console.log("nullVariable", nullVariable);
console.log("undefinedVariable", undefinedVariable);
console.log("favoriteNumbers", favoriteNumbers);
console.log("person", person);
