import React from "react";

const messages = ["react", "re:react", "re:re:react"]
function UserGreeting(props) {
    const unreadMessages= props.unreadMessages;
    return ( 
        <div>
            <h1>Welcome back!</h1>
            {unreadMessages.length > 0 &&
                <h2> 
                    you have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting 
      unreadMessages={messages}/>;
    }
    return <GuestGreeting />;
  }
  
  export default Greeting;