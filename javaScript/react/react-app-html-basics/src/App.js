import React from 'react'
import './App.css';

const App = () => {
  return(
    <> {/* React Fragment */}
      <div> 
        <p> divs shouldnt have text free floating in them, they should be in a p or h tag.</p>
      </div>
      <div>
        <p>These are my headers</p>
        <h1>This is an h1</h1>
        <h2>This is an h2</h2>
        <p> header tags go all the way to h6</p>
      </div>
      
      <div>
        <h3>This is an unordered list</h3>
        <ul>
          <li> this is my first list item</li>
          <li> this is my second item</li>
          <li> this is my third item</li>
        </ul>
      </div>
      <div>
        <h3>this is an ordered list</h3>
          <ol>
            <li>first thing</li>
            <li> second thing</li>
            <li> third thing</li>
          </ol>
      </div>

      <div>
        <h3 style={{color:"red", fontSize: 30}}> this is a table</h3>
        <table>
          <thead>
            <tr>
              <td>First Header</td>
              <td>Second Header</td>
              <td>Third Header</td>
            </tr>
            <tr>
              <td>this is the far top left</td>
              <td> this is the top middle</td>
              <td> this is the top right</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> first item top left</td>
              <td> second item in the middle</td>
              <td> third item on the right</td>
            </tr>
            <tr>
              <td> another first item top left</td>
              <td> another second item in the middle</td>
              <td> another third item on the right</td>
              <td> oops, this happened because theres only 3 headers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br/>
      <p> there was a break above me</p>

      <hr/>
      <p> there was a line above me with hr tag</p>

      <div>
        <p>This is an "A href" tag</p>
        <a href="google.com"> Visit google</a>
      </div>
      
      <div>
        <p>This is an image tag</p>

        <img width={500} alt="funny dog" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F04%2Ffunny-dog-pictures.jpg&f=1&nofb=1"/>
      </div>

      <div>
        <h3> this is a button</h3>
        <button>click me for awesome noods</button>
        <br/>
        <button>singles in ur area</button>
      </div>

      <hr/>
      <h1> Grid and Flexbox</h1>
      
    </>
  );
}

export default App;
