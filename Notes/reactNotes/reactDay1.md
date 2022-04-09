Day 1 of learning JS React.

Notes from the JS react tutorial on the react website: 

Building a tic-tac-toe game with React.

tutorial makes use of: 
    - arrow functions
    - classes
    - let
    - const

What is React?

    React is a declarative, efficient, and flexible JS library for building UIs.
    You can compose complex UIs using small, isolated pieces of code called "components".


React.Component subclasses:

<script>
class ShoppingList extends React.Component
{
    render() {
        return(
            <div className="shopping-list">
                <h1>Shopping List for
{this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                    </ul>
                </div>
        );
    }
}
//Example usage: <ShoppingList name="Mark/>
</script>


XML (extensible markup language): markup language similar to HTML, but without predefined tags to use.
Instead you can define your own tags designed specifically for your needs. 

(Getting to the XML-like tags in a moment)

Components are used to tell React what we want to see on the screen.
When data is changed, React will efficiently update and re-render the components.

In the above example, ShoppingList is a *React component class* || *React component type*.
Components take in parameters called *props* (short for "properties"), and returns a hierarchy of views to display via the *render* method.



Render Method: returns a description of what you want to see on screen.
    React will take this description and display the result.

    Render returns a *React element* (a lightweight description of what to render)

JSX Syntax: 
    Most react developers use this to make structures easier to write. The above example is equivalent to this one here:

<script>
return React.createElement("div",
{className: "shopping-list"},
    React.createElement ("h1", /*... h1 children*/),
    React.createElement("ul", /*... ul children*/)
);
</script>

    JSX comes with the full power of JS. You can put ANY JS expressions within braces inside JSX.
    Each React element is a JS object that you can store in a variable or pass around in your program.

    Each React component is encapsulated and can operate independently; this allows you to build complex UIs from simple components.



    interview question: 
    what is the job of the browser? 
         the browser reads html and js and translates it to ui


install package manager (i have volta)
install node which will handle js
install yarn (yarn --version) will tell you the version of the program in your computer. terminal will not tell you if something is installed, it will give you a version number if it IS installed and if it is NOT it will be like oopsie not found.

