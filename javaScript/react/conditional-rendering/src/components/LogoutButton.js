import React from "react";

function LogoutButton(props) {
    return (
      <button style={{backgroundColor: "pink",}} onClick={props.onClick} >
        logout
      </button>
    );
  }
export default LogoutButton;