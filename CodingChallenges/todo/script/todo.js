let todoItems = [
    { id: 1, text: "Take out trash and recycling", completed: true},
    { id: 2, text: "Pick up dry cleaning", completed: false},
    { id: 3, text: "Get oil change", completed: false},
    { id: 4, text: "Write thank-you notes", completed: true},
]
, id=5;
console.log("todoItems: ", todoItems)

//-------------- todo items as variables-------------
const item = todoItems.find(item => item.id === 1)
console.log("item 1: ", item.text)

const item2 = todoItems.find(item => item.id === 2)
console.log("item 2: ", item2.text)

const item3 = todoItems.find(item => item.id === 3)
console.log("item 3: ", item3.text)

const item4 = todoItems.find(item => item.id === 4)
console.log("item 4: ", item4.text)



//----------- load window with checkmark checked 
//(doesnt matter if true or false) --------------------------------

// window.onload = onPageLoad();

// function onPageLoad () {
//     const checkboxvar = document.querySelector(".todo-checkbox")
// console.log("checkbox var", checkboxvar)
//     checkboxvar.checked = true;
// }

//const checkboxvar = document.querySelector(".todo-checkbox")
// console.log("checkbox var", checkboxvar)

//------------ deleted the entire main-todo-list div -------------

const step1 = document.querySelector(".todo")
step1.setAttribute("id","delete-me")

let getDeleted = document.getElementById("delete-me")
console.log("get deleted", getDeleted)
if (getDeleted.parentNode) {
    getDeleted.parentNode.removeChild(getDeleted)
}

// ------- create a root element to attach divs to main-todo-list------

 const rootElement = document.getElementById("main-todo-list")
 console.log("rootElement: ", rootElement)


///--------- todo function ---------------

const list= document.getElementById("main-todo-list")
const lineThrough = document.getElementsByClassName("todo complete")
function addToDo(toDo, id, completed){

    //const DONE = completed ? checked : unchecked 
    const LINE = completed ? lineThrough : "";

    const item = `
                <div class="todo">
                <input type="checkbox" class=".todo-checkbox"/>
                <span class ="todo-text ${LINE}">${toDo}</span>
                </div>
            `
    const position = "beforeend";

    list.insertAdjacentHTML(position,item)
}

addToDo(item.text)
addToDo(item2.text)
addToDo(item3.text)
addToDo(item4.text)

//if the boolean is true, the checkbox should be checked

//if (item.completed === true)
const taskComplete = item.completed === true
console.log("task completed:", taskComplete)
const taskIncomplete = item.completed === false
console.log("task incomplete", taskIncomplete)

if (item.completed === true) {
    const checkboxvar = document.querySelector(".todo-checkbox")
    console.log("checkbox var", checkboxvar)
    checkboxvar.checked = true;
}

//-------------------- create checkbox variables

//const CHECKED = document.getElementById("idForCheck")

//--------------- add an item to the list using enter key-------

const input = document.getElementById("input")

document.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        const toDo = input.value;

        //if input is not empty
        if(toDo){
            addToDo(toDo, id, false);

            todoItems.push({
                id: id++,
                text: toDo,
                completed: false,
            });
            //id++;
        }
         input.value = "";
    }
});