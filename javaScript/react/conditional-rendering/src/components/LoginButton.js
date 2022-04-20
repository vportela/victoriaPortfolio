import React from "react";


function LoginButton(props) {
    return (
      <button style={{backgroundColor: "green",}} onClick={props.onClick}>
        Login
      </button>
    );
  }

  export default LoginButton;