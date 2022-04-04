let todoItems = [
    { id: 1, text: "Take out trash and recycling", completed: true},
    { id: 2, text: "Pick up dry cleaning", completed: true},
    { id: 3, text: "Get oil change", completed: false},
    { id: 4, text: "Write thank-you notes", completed: false},
]
, id=5;
console.log("todoItems: ", todoItems)

//------------------------------
// const checkboxState1 = (document.querySelector(".todo-checkbox").checked = true)
// console.log("checkboxstate1", checkboxState1)


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

// const checkboxvar = document.querySelector(".todo-checkbox")
// console.log("checkbox var", checkboxvar)
// checkboxvar.setAttribute("checked")

//------------ deleted the entire main-todo-list div -------------

const step1 = document.querySelector(".todo")
step1.setAttribute("id","delete-me")

let getDeleted = document.getElementById("delete-me")
console.log("get deleted", getDeleted)
if (getDeleted.parentNode) {
    getDeleted.parentNode.removeChild(getDeleted)
}


///--------- todo function ---------------

const list= document.getElementById("main-todo-list")
const lineThrough = document.getElementsByClassName(".todo complete")
console.log("linethrough", lineThrough)
function addToDo(toDo,){
    
  
    const item = `
                <div id="todoDIV" class="todo complete">
                <input  type="checkbox" onclick="myFunction" class="todo-checkbox" checked/>
                <span class ="todo-text" >${toDo}</span>
                </div>
            `
    const position = "beforeend";

    list.insertAdjacentHTML(position,item)
}

addToDo(item.text)
addToDo(item2.text)
addToDo(item3.text) 
addToDo(item4.text)

//--------------- editing class list instead ----------

// function myFunction(){ 
//     const todoDIV = document.getElementById("todoDIV");
//     todoDIV.classList.remove("todo");
//     }}

//MAYBE I CAN CREATE A SWITCH STATEMENT INSTEAD OF AN IF/ELSE?
//THE SWITCH STATEMENT WILL SWITCH "TODO" WITH "TODO COMPLETE"
//I PRAY IT WORKS.
// list.forEach(object => {
//     if (object.completed === true){ 
//     const element = document.getElementById("todoDIV");
//     element.classList.remove("todo_complete");
//     element.classList.add("todo");
//     }
// })


//-------------- event listener for checkbox ----------------

const listDIV = document.getElementById("todoDIV")
console.log("listDIV", listDIV)


// function toggleComplete(inputElement){
//     console.log("input element", inputElement)
//     if(inputElement.checked === false) {
//         inputElement.parentElement.classList.remove("todo complete");
//     } else {
//         inputElement.parentElement.classList.add("todo complete");
//     }

// }

// listDIV.addEventListener("change", function (event){
//         if(event.target.tagName === "input" && event.target.type === "checkbox") {
//             toggleComplete(event.target)
//         }
// })

// console.log("main list", list)


//if the boolean is true, the checkbox should be checked

//if (item.completed === true)
// const taskComplete = item.completed === true
// console.log("task completed:", taskComplete)
// const taskIncomplete = item.completed === false
// console.log("task incomplete", taskIncomplete)

todoItems.forEach(userImIteratingOn => {
        const completionStatus = userImIteratingOn.completed
        if (completionStatus === false) {
        //const checkboxvar = document.getElementsByTagName("input" && "todo-checkbox")
        //console.log("checkbox var", checkboxvar)
        console.log("object(s) completed", userImIteratingOn.completed)
        listDIV.classList.remove("complete")
        } else {
            listDIV.classList.add("complete")
        }
        //document.getElementsByTagName("input").checked = true;
        //checkboxvar.setAttribute("checked")
})


// function onPageLoad () {
//     document.querySelector(".todo-checkbox").checked = true;
// }
//-------------------- create checkbox variables---------------

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