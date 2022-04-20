import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //things in curly brackets are not exported on default export

//functional component
const App = () => {

  // const myName = "dog"
  const [myName, setMyName] = useState("dog") // this is the first hook "dog" is just the initial value, it 
  //will not go back to being dog unless you tell it to.

  const handleButtonOnClick =() => {
    //console.log("i was clicked")
    if( myName === "dog") {
      setMyName("another name")
    } else {
      setMyName("dog")
    }
 
  }

  // if (myName === "captain dog") {
  //   return(
  //     <div>
  //       <h1>this person's name is captain dog</h1>
  //     </div>
  //   )
  // } else {
  //   return null
  // }

  return (
    <div>
       {/* <h1>hewwo</h1>
      {myName === "dog" && (
        <div>
          <p> this persons name is captain dog</p>
        </div>
      )} */}
   {/* ---------------------this is a ternary, ternary must have an else to go with your if------  */}
      {/* {myName.length === 3 ? (
        <div>
          <p> this name has a length of 3</p>
        </div>
      ) : (
        <div>
          <p>the length of this name is not 3</p>
        </div>
      )
      }   */}
      <p> my name is: {myName}</p>
      <button onClick={handleButtonOnClick}>CLICK ME</button>
    </div>
  )
}
  

const color= "blue"

if (color === "blue" && color.length === 4){ //this is an AND operator
    console.log("hell yeah this is an AND operator")
}

const ternaryResult = color === "blue" ? "yay, you chose blue" : "you did not choose blue"
console.log("ternaryResult", ternaryResult)

const color2 = color.length === 4 && "black"  //if this is true, return the thing, if it is false return FALSE
console.log("color2", color2)

export default App;
