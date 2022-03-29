const todoItems = [
    { id: 1, text: "Take out trash and recycling", completed: true},
    { id: 2, text: "Pick up dry cleaning", completed: false},
    { id: 3, text: "Get oil change", completed: false},
    { id: 4, text: "Write thank-you notes", completed: false},
];
console.log("todoItems: ", todoItems)



const item = todoItems.find(item => item.id === 1)
console.log("item 1: ", item.text)

const item2 = todoItems.find(item => item.id === 2)
console.log("item 2: ", item2.text)

const item3 = todoItems.find(item => item.id === 3)
console.log("item 3: ", item3.text)

const item4 = todoItems.find(item => item.id === 4)
console.log("item 4: ", item4.text)




// const toDoText = document.getElementsByClassName("main-todo-list")
// console.log("toDoText", toDoText)
// //toDoText.remove()

// const appElement = document.getElementsByClassName("app")
// console.log("appElement", appElement[0])

// const mainTodoElement = document.createElement("div")
// mainTodoElement.id="new-main-todo-list"
// //mainTodoElement.className="todo-list"





const rootElement = document.getElementById("main-todo-list")
console.log("rootElement: ", rootElement)

//------ to do list item 1 -------

const divElement = document.createElement("div")
divElement.className="todo"
//divElement.id="todo-id"
rootElement.appendChild(divElement)

const inputElement = document.createElement("input")
inputElement.type="checkbox"
inputElement.className="todo-checkbox"
rootElement.appendChild(inputElement)
divElement.appendChild(inputElement)

const spanElement = document.createElement("span")
spanElement.innerHTML = item.text
spanElement.className="todo-text"
rootElement.appendChild(spanElement)
divElement.appendChild(spanElement)

//------ to do list item 2 -------

const divElement2 = document.createElement("div")
divElement2.className="todo"
//divElement.id="todo-id"
rootElement.appendChild(divElement2)

const inputElement2 = document.createElement("input")
inputElement2.type="checkbox"
inputElement2.className="todo-checkbox"
rootElement.appendChild(inputElement2)
divElement2.appendChild(inputElement2)

const spanElement2 = document.createElement("span")
spanElement2.innerHTML = item2.text
spanElement2.className="todo-text"
rootElement.appendChild(spanElement2)
divElement2.appendChild(spanElement2)

//------ to do list item 3 -------

const divElement3 = document.createElement("div")
divElement3.className="todo"
//divElement.id="todo-id"
rootElement.appendChild(divElement3)

const inputElement3 = document.createElement("input")
inputElement3.type="checkbox"
inputElement3.className="todo-checkbox"
rootElement.appendChild(inputElement3)
divElement3.appendChild(inputElement3)

const spanElement3 = document.createElement("span")
spanElement3.innerHTML = item3.text
spanElement3.className="todo-text"
rootElement.appendChild(spanElement3)
divElement3.appendChild(spanElement3)

//------ to do list item 4 -------

const divElement4 = document.createElement("div")
divElement4.className="todo"
//divElement.id="todo-id"
rootElement.appendChild(divElement4)

const inputElement4 = document.createElement("input")
inputElement4.type="checkbox"
inputElement4.className="todo-checkbox"
rootElement.appendChild(inputElement4)
divElement4.appendChild(inputElement4)

const spanElement4 = document.createElement("span")
spanElement4.innerHTML = item4.text
spanElement4.className="todo-text"
rootElement.appendChild(spanElement4)
divElement4.appendChild(spanElement4)


//css needs: 
// for each object in the array,
//if the completed boolean === true
// change appearance


const getTaskCompletionStatus = (listOfArrayObjects) =>{
    

    listOfArrayObjects.forEach(object => {
        //console.log("user object from todoitem array", object)
        const completionBoolean = object.completed
        //console.log( "completion boolean", completionBoolean)

        if (completionBoolean === true) {
            console.log( "this task is complete!")
            } else {
                console.log("this task is NOT complete!")
        }
    })
    return 
}
completeOrIncomplete = getTaskCompletionStatus(todoItems)