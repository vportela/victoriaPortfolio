const todoItems = [
    { id: 1, text: "Take out trash and recycling", completed: true},
    { id: 2, text: "Pick up dry cleaning", completed: false},
    { id: 3, text: "Get oil change", completed: false},
    { id: 4, text: "Write thank-you notes", completed: false},
];
console.log("todoItems: ", todoItems)


const toDoText = document.getElementsByClassName("todo-text")
console.log("toDoText", toDoText)
toDoText[0].innerText = "poop"


console.log(todoItems[1])


// const headerTitle = document.getElementsByClassName("poop")
// console.log("headerTitle", headerTitle)

// headerTitle[0].innerText = "hewwo"