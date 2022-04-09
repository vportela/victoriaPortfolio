let todoItems = [
    { id: 1, text: "Take out trash and recycling", completed: true},
    { id: 2, text: "Pick up dry cleaning", completed: false},
    { id: 3, text: "Get oil change", completed: true},
    { id: 4, text: "Write thank-you notes", completed: true},
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
//const lineThrough = document.getElementsByClassName(".todo complete")
//console.log("linethrough", lineThrough)
function addToDo(toDo,id){
    
    //interpolating
    const todoItem = `
                <div id=${id} class="todo" >
                <input  type="checkbox" id="checkboxId" onclick="toggle" class="todo-checkbox"/>
                <span class ="todo-text" >${toDo}</span>
                </div>
            `
    const position = "beforeend";

    list.insertAdjacentHTML(position,todoItem)
}
addToDo(item.text, item.id)
addToDo(item2.text, item2.id)
addToDo(item3.text, item3.id) 
addToDo(item4.text, item4.id)


//-------------- checkbox toggle function (in progress) --------

// let checkboxitem = item.completed = false;
// console.log("default value of boolean is ", checkboxitem)

// function toggle(){ 
//     checkboxitem = !checkboxitem;
//     console.log("toggled bool is", checkboxitem);
//     }
    


//-------------- event listener for checkbox ----------------

// const listDIV = document.getElementsByClassName("todo")
// console.log("listDIV", listDIV)



// const listDIVClass = document.getElementsByClassName("listdiv")
// console.log("listDIVClass", listDIVClass)


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

// if (item.completed === true)
// const taskComplete = item.completed === true
// console.log("task completed:", taskComplete)
// const taskIncomplete = item.completed === false
// console.log("task incomplete", taskIncomplete)

// ------------------ completion variables------------------
const listDIV = document.getElementById("1")
console.log("listDIV", listDIV)
const listDIV2 = document.getElementById("2")
console.log("listDIV", listDIV2)
const listDIV3 = document.getElementById("3")
console.log("listDIV", listDIV3)
const listDIV4 = document.getElementById("4")
console.log("listDIV", listDIV4)

//--------------------------------completion function for item 1----------


const getItemCompletionStatus = (listOfObjects) =>{

    //listOfObjects.forEach(taskImIteratingOn => {
        const completionStatus = listOfObjects.completed
        console.log("completion status before loop", completionStatus)
        if (completionStatus === true) {
            //console.log("completion status", completionStatus)
            //const checkboxvar = document.getElementsByTagName("input" && "todo-checkbox")
            //console.log("checkbox var", checkboxvar)
            //console.log("this item is incomplete", completionStatus)
            listDIV.classList.add("complete")
        } if (completionStatus === false) {
            listDIV.classList.remove("complete")
            }
        //document.getElementsByTagName("input").checked = true;
        //checkboxvar.setAttribute("checked") 
}
const completeOrNot = getItemCompletionStatus(item)

//------------------------- completion function for item 2--------
const getItem2CompletionStatus = (listOfObjects) =>{

    //listOfObjects.forEach(taskImIteratingOn => {
        const completionStatus = listOfObjects.completed
        console.log("completion status before loop", completionStatus)
        if (completionStatus === true) {
            //console.log("completion status", completionStatus)
            //const checkboxvar = document.getElementsByTagName("input" && "todo-checkbox")
            //console.log("checkbox var", checkboxvar)
            //console.log("this item is incomplete", completionStatus)
            listDIV2.classList.add("complete")
        } if (completionStatus === false) {
            listDIV2.classList.remove("complete")
            }
        //document.getElementsByTagName("input").checked = true;
        //checkboxvar.setAttribute("checked") 
}
const completeOrNot2 = getItem2CompletionStatus(item2)

//------------------------- completion function for item 3--------
const getItem3CompletionStatus = (listOfObjects) =>{

    //listOfObjects.forEach(taskImIteratingOn => {
        const completionStatus = listOfObjects.completed
        console.log("completion status before loop", completionStatus)
        if (completionStatus === true) {
            //console.log("completion status", completionStatus)
            //const checkboxvar = document.getElementsByTagName("input" && "todo-checkbox")
            //console.log("checkbox var", checkboxvar)
            //console.log("this item is incomplete", completionStatus)
            listDIV3.classList.add("complete")
        } if (completionStatus === false) {
            listDIV3.classList.remove("complete")
            }
        //document.getElementsByTagName("input").checked = true;
        //checkboxvar.setAttribute("checked") 
}
const completeOrNot3 = getItem3CompletionStatus(item3)

//------------------------- completion function for item 4--------
const getItem4CompletionStatus = (listOfObjects) =>{

    //listOfObjects.forEach(taskImIteratingOn => {
        const completionStatus = listOfObjects.completed
        console.log("completion status before loop", completionStatus)
        if (completionStatus === true) {
            //console.log("completion status", completionStatus)
            //const checkboxvar = document.getElementsByTagName("input" && "todo-checkbox")
            //console.log("checkbox var", checkboxvar)
            //console.log("this item is incomplete", completionStatus)
            listDIV4.classList.add("complete")
        } if (completionStatus === false) {
            listDIV4.classList.remove("complete")
            }
        //document.getElementsByTagName("input").checked = true;
        //checkboxvar.setAttribute("checked") 
}
const completeOrNot4 = getItem4CompletionStatus(item4)






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