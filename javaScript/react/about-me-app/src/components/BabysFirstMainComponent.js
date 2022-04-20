import React from 'react';

import Intro from './Intro';
import Likes from './Likes.js';
import Footer from './Footer.js';
import Dislikes from './Dislikes.js';
import Navigation from './Navigation.js';




const likes = ['Going to the beach', 'Playing BOTW', 'Bothering the cat']
const dislikes = ['Going to bed on time', 'Eating fish', 'Driving']

const friends = [
  {
    name: "victoria",
    age: 100,
    favoriteColor: "blue",
  }
]

const MainComponent = (props) => (
  <div>
    <Navigation/>
    <div style={{backgroundColor: "pink", display: "flex"}}>
      <div style={{backgroundColor: "red", width: "30%"}}>
        <Intro/>
      </div>
      <div style={{backgroundColor: "orange", width: "30%", display:"flex"}}>
        <Likes
          likes={likes}
        />
        <Dislikes
          dislikes={dislikes}
        /> 
      </div>
    </div>
    
  
   
    <Footer/>
    
  </div>
)

export default MainComponent;