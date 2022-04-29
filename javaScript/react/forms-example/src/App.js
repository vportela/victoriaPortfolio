import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

const [fullName, setFullName] = useState("victoria portela")
const [age, setAge] = useState("26")

const handleSubmit = (e) => {
  e.preventDefault()

  const typedFirstName = e.target.elements.thisIsTheNameICreated.value
  console.log("typedFirstName", typedFirstName)

  const typedLastName = e.target.elements.thisIsTheLastNameICreated.value

  const typedAge = e.target.elements.age.value
  console.log("typedAge", typedAge)
  console.log("typedLastName",typedLastName )
  console.log("im being submitted with event:", e)
  setFullName(typedFirstName + " " + typedLastName)
  setAge(typedAge)
}

  return (
    <div className="App">
      <h1>This is my form!</h1>

      <form onSubmit={handleSubmit}>
      <p>First Name</p>
      <input type="text" name="thisIsTheNameICreated"/>

      <p>Last Name</p>
      <input type={"text"}  name="thisIsTheLastNameICreated"/>

      <p>Age</p>
      <input type={"text"}  name="age"/>

      <div>
        <button>Click me</button> 
      </div>

      <div>
        <p>My name is: {fullName}, my age is {age}</p>
      </div>

      </form>
    </div>
  );
}

export default App;
