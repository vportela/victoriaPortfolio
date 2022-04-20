import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict.js"

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
  
const TemperatureInput = (props) => {
    const [temperature, setTemperature] = useState('')

    const handleChange = (e) => {
       setTemperature(e.target.value)
    }

    const scale = props.scale;

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                    onChange={handleChange} />
            <BoilingVerdict
                temperature={temperature}
            />
        </fieldset>
    );
    
}

  export default TemperatureInput;