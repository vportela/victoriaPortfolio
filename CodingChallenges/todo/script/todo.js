const todoItems = [
    { id: 1, text: "Take out trash and recycling", completed: true},
    { id: 2, text: "Pick up dry cleaning", completed: false},
    { id: 3, text: "Get oil change", completed: false},
    { id: 4, text: "Write thank-you notes", completed: false},
];
console.log("todoItems: ", todoItems)



const item = todoItems.find(item => item.id === 1)
console.log(item.text)





const toDoText = document.getElementsByClassName("todo-text")
console.log("toDoText", toDoText)
toDoText[0].innerText = "poop"
// toDoText[1].innerText = "da baby"

const rootElement = document.getElementById("main-todo-list")
console.log("rootElement: ", rootElement)


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


