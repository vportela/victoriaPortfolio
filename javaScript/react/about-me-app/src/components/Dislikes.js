import React from 'react';

const Dislikes = (props) => (
    <div>
         <h3>Dislikes:</h3>
            {props.dislikes.map(dislikes => <li key={dislikes}>{dislikes}</li>)}
    
    </div>
  );

export default Dislikes;



