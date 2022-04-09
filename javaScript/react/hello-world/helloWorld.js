console.log("hewwo from js file")

const rootDiv = document.getElementById("root")


const HelloWorld = React.createClass({
    render( {
        return {
            <div>
                <h1 id="hello" class="blah">Hello World</h1>
        }
    })
})


React.render(div, rootDiv);