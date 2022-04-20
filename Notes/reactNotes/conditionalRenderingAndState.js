//component State

//setState()  - this schedules an update to a component's "state" object.
//whenever the state changes, the component will re-render to show the changes.

//calls to setState() are ASYNCHRONOUS. thus, this.state should not be relied on to
//reflect new values immediately. 

//"pass an updater function instead of an object if you need to compute values
//based on the current state" --- * what exactly would an "updater function" be?

//Update function allows you to access the current state valye inside the updater. 
// setState calls are batched.
// batched calls lets you chain the updates together to make sure they build on 
//top of each other instead of conflicting. 

//----------------- this code will not behave as expected ---------------------

incrementCount() {
    // Note: this will *not* work as intended.
    this.setState({count: this.state.count + 1});
  }
  
  handleSomething() {
    // Let's say `this.state.count` starts at 0.
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    // When React re-renders the component, `this.state.count` will be 1, but you expected 3.
  
    // This is because `incrementCount()` function above reads from `this.state.count`,
    // but React doesn't update `this.state.count` until the component is re-rendered.
    // So `incrementCount()` ends up reading `this.state.count` as 0 every time, and sets it to 1.
  
    // The fix is described below!
  }

  //--------- -------------- the fix - --------------------------

incrementCount() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {count: state.count + 1}
    });
  }
  
  handleSomething() {
    // Let's say `this.state.count` starts at 0.
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  
    // If you read `this.state.count` now, it would still be 0.
    // But when React re-renders the component, it will be 3.
  }
  


  //setState is asynchronous inside event handlers. so if parent and child call setState
  // during a click event, child wont be re-rendered twice. this results in significant
  //performance improvements in larger apps.


  //------------------CONDITIONAL RENDERING------------------

  //you can create specific components and then only render some of them depending
  //on the state of the application.

  //conditional rendering in React is similar to JS: using operators like "if" or 
  // the "conditional operator" (ternary aka: ? )

  //consider these two components

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  //then they created a greeting component that displays either of these components
  //depending on whether a user is logged in.

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;   //-------how does it know the first one is true? ---
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );


  // -----------ELEMENT VARIABLES ----------------

  //variables can be used to store elements which helps you conditionally
  //render a part of the component while the rest doesnt change. 



  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this); //----- can this be explained? wtf is .bind how does this sentence work?
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
  );


  //-------------- using && --------

  function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
  );

//this works because true && expression always = expression
//while FALSE && expression will always = false

//so if the condition is true, the element (Expression) right after the &&
//will be what shows. 
// if it's FALSE react will skip it.

//FALSY will still be skipped after && but will still return the falsy expession.


//--------------------------inline If-Else conditional operator-----------

 //condition ? true : false

 render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
    );
  }

// ------------------- prevent component from rendering ---------------

//to keep something from rendering, it has to return "null".

//functional component = it is a component that uses a => component
//class components CANNOT USE HOOKS and everything must be inside "methods"

//immutable = cannot be changed.
//thus a const variable is IMMUTABLE. it cannot be changed. 

//hooks have to start with the word "use"