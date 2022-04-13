import React from 'react';

import Intro from './Intro';
import Likes from './Likes.js';
import Footer from './Footer.js';
import Dislikes from './Dislikes.js';
import Navigation from './Navigation.js';
import MyFriend2 from './Myfriend2';




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
    <h2> Using MyFriend3</h2>
    {friends.map(myFriend => {
      return (
        <MyFriend2
          friend={myFriend}
    />
      )
    })}
    
    <Footer
    />
    
  </div>
)

export default MainComponent;