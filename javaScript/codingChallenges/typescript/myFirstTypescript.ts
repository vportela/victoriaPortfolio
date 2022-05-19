



const myName: string = "victoria"
const myFavNumber: number = 5
const isHappy: boolean = true
const nullVariable: null = null
const undefinedVariable: undefined = undefined
const favriteColors: string[] = ["red", "blue", "pink"]
const favoriteNumbers: number[] = [2, 56765,3,567,43]
const person: {name: string, age: number, isHappy: boolean} = {
    name: "victora",
    age: 26,
    isHappy: true
}

const myfunction = (someParameter: string) => {
    console.log("myFunction - hello there someParameter", someParameter)
}
myfunction("i am the parameter! meow!")


type MyEvent = {
    target: { 
        value:string
    }
}
const myFunction2 = (event: MyEvent) => { 
    console.log("myFunction2 - event", event)
}

const myEventObject: MyEvent = { 
    target: { 
        value: "i am a string value"
    }
}
myFunction2(myEventObject)

enum Hobby {
    GAMING, DRAWING, EATING, SLEEPING
}
type Color = "red" |  "blue" |"green"
type Person = {
    firstName: string,
    lastName: string,
    favoriteColor: Color,
    age: number,
    isHappy: boolean,
    favoriteHobby: Hobby,
    hobbies: Hobby[]
}

const person2: Person = {
    firstName: "victoria",
    lastName: "portela",
    favoriteColor: "red",
    age: 26,
    isHappy: true,
    favoriteHobby: Hobby.GAMING,
    hobbies: [Hobby.DRAWING, Hobby.EATING]
}

console.log("my name is", myName)
console.log("my myFavNumber", myFavNumber)
console.log("isHappy", isHappy)
console.log("nullVariable", nullVariable)
console.log("undefinedVariable", undefinedVariable)
console.log("favoriteNumbers", favoriteNumbers)
console.log("person", person)

export {}