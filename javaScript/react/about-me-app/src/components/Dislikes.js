import React from 'react';

const Dislikes = (props) => (
    <div>
         <h3>Dislikes:</h3>
            {props.dislikes.map(dislikes => <p key={dislikes}>{dislikes}</p>)}
    
    </div>
  );

export default Dislikes;



