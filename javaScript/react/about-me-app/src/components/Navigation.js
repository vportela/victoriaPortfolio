import React from 'react';

const Navigation = (props) => (
  <div 
    style={{backgroundColor: "black", display: "grid", gridTemplateColumns: "30% 70%"}}
  >
    <div style={{backgroundColor: "green"}}>
      <p> dsfffffffffhfzdkfhdiufhuidshfsiudhfsdhfkshfksdjhfkahfilaf</p>
      <img 
        style={{paddingLeft: 30, width: 100}} 
        src="https://images.squarespace-cdn.com/content/v1/614f55fe9ddb12701642e47d/dc015209-d873-4d69-946e-a6304dadece0/vikkorama+logo.png?format=1500w"
      />
    </div>
    <div style={{backgroundColor: "blue"}}>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <p>Home</p>
        <p>Work</p>
        <p>Contact</p>
        {/* <p>dhfkjsrhgkjsdfhksfhhjkhfkjsdhfksjfhkjsdhfksjdhfkjsdfhksdjhfkjsdfkjsdhksdjfhksdjhkslhgsjfhgjshgshshlshlkshglksdfhglksfj</p> */}
      </div>
    </div>
  </div>
);

export default Navigation;