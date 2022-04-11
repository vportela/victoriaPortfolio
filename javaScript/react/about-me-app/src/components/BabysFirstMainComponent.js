import React from 'react';

import Intro from './Intro';
import Likes from './Likes.js';
import Footer from './Footer.js';
import Dislikes from './Dislikes.js';
import Logo from './Logo.js';
import Navigation from './Navigation.js';




const likes = ['Going to the beach', 'Playing BOTW', 'Bothering the cat']
const dislikes = ['Going to bed on time', 'Eating fish', 'Driving']


const MainComponent = (props) => (
  <div>
    <Navigation
    />
    <Intro
    />
    <Likes
    likes={likes}
    />
    <Dislikes
    dislikes={dislikes}
    />
    <Footer
    />
    
  </div>
)

export default MainComponent;