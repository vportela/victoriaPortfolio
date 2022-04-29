import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



//show all the to do list items
//make a checkbox appear checked on load
//make css appear when checked === true


// an object with the text, checked boolean. 
//have it display the text, and if boolean === true, apply CSS.
// on click (checkmark) run an anon function which calls a function that handles click
//function will check boolean, if true mark false, and if false mark true + add css styles.

//e.target.checked
//----------------- baby steps
// when checked === true, add "todo complete" class
//when checked === false, change class to "todo"
//when checked, console log the id of each item
// make style change happen when checked && id matches?

function App() {

  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: "Take out trash and recycling",
        complete: true,
        objectClass: "todo complete",
      },
      {
        id: 2,
        text: "Pick up dry cleaning",
        complete: false,
        objectClass: "todo"
      },
      {
        id: 3,
        text: "Get oil change",
        complete: false,
        objectClass: "todo"
      },
      {
        id: 4,
        text: "Write thank-you notes",
        complete: false,
        objectClass: "todo"
      },
    ]
  )

  //-------------- this could actually be good for creating new todos with an onsubmit in the input
  // the ...todos keeps the old todo items and when the event triggers the function it will add these new
  //objects into the array which is pretty sick.
  // setTodos(
  //   [ ...todos, {
  //     id: 4,
  //     text: "poop",  //you would obv do an e.target.value type thing here not hard code a string
  //     complete: false,
  //     class: "todo"
  //   }
  //   ]
  // )

// items remaining baby steps-----------------
// on click HandleCheckClick recieves the item that was clicked.
// if that item's complete status is false, update complete:true and objectClass:"todo complete" using .map
// on click, after the if statements, filter through new todos and see which ones are true
// items with complete: true will add to the counter (idk how yet)


//if your state changes, your ui rerenders. keep this in mind. big hint! 

  const [itemsRemaining, setItemsRemaining] = useState(todos.length)
  const [check, setCheck] = useState("")
  const handleCheckClick = (todoItem, e) => {
    const checked = e.target.checked
    const completeStatus = todoItem.complete 
    if (completeStatus === false){
      // todoItem.complete = true //this is a field of the object, not a property
      // todoItem.class = "todo complete"
      //.find the object whos id that matches the todoItem id, thats how you know which one to change.
     const newTodos = todos.map(todo => {
      //  console.log("todo.id", todo.id)
       if(todo.id === todoItem.id) {
         return {...todo, complete: true, objectClass: "todo complete"}
       }
       return todo
      });
      //you could do 4 each and push the result
      //you can use .map which will give you a new array
      //newTodos has to be a new array
      //react update previous state of array of objects
      setTodos(newTodos)
      setCheck("checked")
      const todosRemaining = newTodos.filter(todo => todo.complete === false).length
      console.log("todo items remaining", todosRemaining)
      setItemsRemaining(todosRemaining)
      
    } else if (completeStatus === true) {
      const newTodos = todos.map(todo => {
        // console.log("todo.id", todo.id)
        if(todo.id === todoItem.id) {
          return {...todo, complete: false, objectClass: "todo"}
        }
        return todo
      });
      setTodos(newTodos)

      const todosRemaining = newTodos.filter(todo => todo.complete === false).length
      // console.log("todo items remaining", todosRemaining)
      setItemsRemaining(todosRemaining)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
   const lastInArray = todos[todos.length - 1]
   console.log("lastInArray", lastInArray.id)

    setTodos(
      [ 
        ...todos, 
        {
          id: lastInArray.id + 1,
          text: e.target.addingTodoItem.value,  //you would obv do an e.target.value type thing here not hard code a string
          complete: false,
          objectClass: "todo"
        }
      ]
    )
    const todosRemaining = todos.filter(todo => todo.complete === false).length+1
    // console.log("todo items remaining", todosRemaining)
    // console.log("todos", todos)
    setItemsRemaining(todosRemaining)

    e.target.addingTodoItem.value=""
  }
  const [hideOrShowItems, setHideOrShowItems] = useState("Hide completed items")
  const handleHideShowClick = (e) => {

    if(hideOrShowItems === "Hide completed items"){
      setHideOrShowItems("Show completed items")
    } else if (hideOrShowItems === "Show completed items"){
      setHideOrShowItems("Hide completed items")
    }

    const remainingItems = todos.filter(todos => {
      if(todos.complete === false) {
        console.log("remainingItems",todos)

      }
    })
    // console.log("hiddenItems",hiddenItems)
  }
  


  // a class will be repeated, so if they all have the same class name, it will happen to all of them.
  //so changing the class name like this, is not the answer you think it is.
  return (
  <div>
    <div>
      <title>Things to do (React)</title> 
    </div>
      <div className="app">
        <h1>Things to do</h1>
        <div id="main-todo-list" className="todo-list">
        {todos.map((item) => 
          <div className={item.objectClass} id={item.id} key={item.id * 2} > 
            <input type="checkbox" className="todo-checkbox" onClick= {(e) => handleCheckClick(item, e)}/>
            <span className="todo-text">{item.text}</span>
          </div>
        )}
          
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="New todo" name="addingTodoItem"/>
        </form>
        
        <p><span id="remaining-count">{itemsRemaining}</span> items remain</p>
        <button onClick={(e) => handleHideShowClick(e)}>{hideOrShowItems}</button>
      </div>
  </div>
  );
}

export default App;
