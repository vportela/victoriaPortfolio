import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

//stwetch goals
//1. no empty strings allowed to become todo items!!!! must have text ** prevent!!! if you enter this it wont work!!
//2. no entries that are just spaces, allowed. *** prevent~!!!! (if you google this the right way, it will be the first response)
//3. no empty spaces before or after the word ** let them do this, but make it so the empty spaces are /actually/ removed upon rendering in the list. 
//!!! not trying to prevent the user from putting these in.
//this are changes to make to the field once they are entered. 
//4. set a prevention (aslo called validation) a max length of 100 characters.
// ^^^^ users cannot put in a field more than 100 characters
//show all the to do list items
//make a checkbox appear checked on load
//make css appear when checked === true




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
      //when you change state, it causes react to look for where that variable is being used and forces react to rerender that part of the dom.
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const lastInArray = todos[todos.length - 1]
    console.log("lastInArray", lastInArray.id)
    
      if(e.target.addingTodoItem.value === "" || e.target.addingTodoItem.value.trim() === "") {
        console.log("NO EMPTY STRING ALLOWED")
        setErrorMessage(" Please enter a valid task")
      } else if (
        e.target.addingTodoItem.value.length > 100){ 
        console.log("STRING TOO LONG")
        setErrorMessage(" Task cannot be over 100 characters")
      } else {
      
    setTodos(
      [ 
        ...todos, 
        {
          id: lastInArray.id + 1,
          text: e.target.addingTodoItem.value.trim(),  //you would obv do an e.target.value type thing here not hard code a string
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
   }
   const [secondErrorMessage, setSecondErrorMessage] = useState("")
   const [errorMessage, setErrorMessage] = useState("")
   const handleFormChange = (e) => {
    console.log("e.target on change", e.target.value)

    e.target.value.trim() === "" ? setSecondErrorMessage(" New todos must contain valid characters") : setSecondErrorMessage("");
    e.target.value.length > 10 ? setErrorMessage(" New Todo cannot be over 100 characters") : setErrorMessage("")
  //   if(e.target.value.length > 10){ 
  //   console.log("TASK TOO LONG")
  //   setErrorMessage("Task cannot be over 100 characters")
  // } else if ( e.target.value.length < 10){
  //   console.log("message is under max character length")
  //   setErrorMessage("")
  // } else if(e.target.value.trim() === ""){
  //     console.log("empty entry")
  //     setErrorMessage("New Todos must contain valid characters")
  //   } else{ 
  //     setErrorMessage("")
  //   } 
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
        {todos.map((item) => !(item.complete === true && hideItems) &&
          <div className={item.objectClass} id={item.id} key={item.id * 2} > 
            <input type="checkbox" className="todo-checkbox" checked={item.complete} onChange= {() => handleChange(item)}/>
            <span className="todo-text">{item.text}</span>
          </div>
        )}
        
          
        </div>
        <form  onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => handleFormChange(e)} type="text" placeholder="New todo" name="addingTodoItem"/>
        <p style={{color:"red"}}>{errorMessage}{secondErrorMessage}</p>
        </form>
        
        <p><span id="remaining-count">{itemsRemaining}</span> items remain</p>
        <button onClick={(e) => setHideItems(!hideItems)}>{hideItems ? "Show completed items" : "Hide completed items"}</button>
      </div>
  </div>
  );
} 

export default App;
