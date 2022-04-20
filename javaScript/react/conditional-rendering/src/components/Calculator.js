import React from "react";
import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput.js"

const Calculator = () => {

    const [temperature, setTemperature] = useState('') 

    const handleChange = (e) => {
        setTemperature(e.target.value)
    }

    return( 
        <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )

}




export default Calculator;


//------- class component line by line explained ----------
// a function inside of a class is called a method. the difference between a function and a method is that a function inside a class is a method


// class Calculator extends React.Component {
//     constructor(props) { ------ this is literally a function 
//       super(props);  ------ this is a function call
//       this.handleChange = this.handleChange.bind(this); ------ in an arrow function, this line doesnt even exist
//       this.state = {temperature: ''}; -------- this is just an object  with an empty string
//     }
  
//     handleChange(e) {
//       this.setState({temperature: e.target.value}); ----- 'e' stands for event
//     }
  
//     render() {
//       const temperature = this.state.temperature; ------- this is assigning the object state's temp prop to the variable temperature
//       return (
//         <fieldset>
//           <legend>Enter temperature in Celsius:</legend>
//           <input
//             value={temperature}
//             onChange={this.handleChange} />
//           <BoilingVerdict
//             celsius={parseFloat(temperature)} /> ---------- parse means to take somthing from one type and chang it to another. this thing will take in a string and return a number.
//         </fieldset>
//       );
//     }
//   }