import React from 'react';

const Dislikes = (props) => (
    <div className="dislikes_list" >
         <h3>Dislikes:</h3>
            {props.dislikes.map(dislikes => <li key={dislikes}>{dislikes}</li>)}
    
    </div>
  );

export default Dislikes;



