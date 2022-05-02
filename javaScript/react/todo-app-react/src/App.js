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


  const [itemsRemaining, setItemsRemaining] = useState(todos.filter(todo => todo.complete === false).length)
 

  const handleChange = (todoItem) => {
    // console.log("e.target.checked", e.target.checked)
    // console.log("id",todoItem.id)
    
    const completeStatus = todoItem.complete 

    if (completeStatus === false){
      // todoItem.complete = true //this is a field of the object, not a property
      // todoItem.class = "todo complete"
      //.find the object whos id that matches the todoItem id, thats how you know which one to change.
     const newTodos = todos.map(todo => {
      //  console.log("todo.id", todo.id)
      // console.log("e.target.checked inside newTodos .map", e.target.checked)
       if(todo.id === todoItem.id) {
        // console.log("e.target.checked after if statement", e.target.checked)
         return {...todo, complete: true, objectClass: "todo complete", }
         
       }
       return todo
       
      });
      //you could do 4 each and push the result
      //you can use .map which will give you a new array
      //newTodos has to be a new array
      //react update previous state of array of objects
      setTodos(newTodos)

      const todosRemaining = newTodos.filter(todo => todo.complete === false).length //filter goes through the array of objects (like .map), creates a new array with all the items that return "true" in the function.
      //in this particular case, when todo.complete===false it is technically true as far as the .filter is concerned and it will add that todo to the array it is creating.
      //.filter returns an array, when .length is added, you are saying for that new array .filter created, give me the length (number of things in array)
      
      //look up how reduce works. .filter and .map is using reduce under the hood (kinda), look it up.
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
  const [hideItems, setHideItems] = useState(false)

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
          
         {/* .filter returns a new array with all the things that return "true"
         so when item.completed is equal to the opposite of hide items, .map the resulting array.
         this is how it will show the completed or incomplete. */}
        {todos.filter((item) => !hideItems || item.complete === !hideItems).map((item) => 
          <div className={item.objectClass} id={item.id} key={item.id * 2} > 
            <input type="checkbox" className="todo-checkbox" checked={item.complete} onChange= {() => handleChange(item)}/>
            <span className="todo-text">{item.text}</span>
          </div>
        )}
        
          
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="New todo" name="addingTodoItem"/>
        </form>
        
        <p><span id="remaining-count">{itemsRemaining}</span> items remain</p>
        <button onClick={(e) => setHideItems(!hideItems)}>{hideItems ? "Show completed items" : "Hide completed items"}</button>
      </div>
  </div>
  );
}

export default App;
