import React from 'react';

const Likes = (props) => (
    <div>
        <div>
            <h3>Likes:</h3>
            {props.likes.map(likes => <p key={likes}>{likes}</p>)}
        </div>
    
    </div>
  );

export default Likes;