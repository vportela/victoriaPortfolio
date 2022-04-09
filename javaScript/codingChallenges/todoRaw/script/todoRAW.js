const todoItems = [
    { id: 1, text: "Take out trash and recycling", completed: true},
    { id: 2, text: "Pick up dry cleaning", completed: false},
    { id: 3, text: "Get oil change", completed: false},
    { id: 4, text: "Write thank-you notes", completed: false},
];
console.log("todoItems: ", todoItems)


////------- this stuff is copied from my other file 



//css needs: 
// for each object in the array,
//if the completed boolean === true
// change appearance



// completeOrIncomplete = getTaskCompletionStatus(todoItems)

// document.getElementsByClassName("todo-checkbox")onclick(function onClickComplete() {
//     document.getElementsByClassName("todo-text").addClass(".todo.complete")
// }
// )

//selector
const todoComplete = document.getElementsByClassName("todo complete")
console.log(todoComplete)
const todoCheckbox = document.querySelector(".todo-checkbox")
console.log(todoCheckbox)

//Event Listener

todoCheckbox.addEventListener("click", markComplete)
todoCheckbox.classList.add(".todo.complete")

//event.target.value -------- AN ADVICE PROVIDED BY LUCAS FOR CHANGING THE VALUE OF SHIT (AKA MARK COMPLETED)


//function

function markComplete(event){
   console.log("hello") 
}

    // document.querySelector("input todo-checkbox").click(function changeCompletion() {
    //     document.querySelector.addClass("todo complete")
    // })


    //on click change boolean to true
    //if boolean is true, apply the styles class "todo complete"


  