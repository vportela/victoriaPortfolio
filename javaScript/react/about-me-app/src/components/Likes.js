import React from 'react';

const Likes = (props) => (
    
        <div className='likes-list'>
            <h3>Likes:</h3>
            {props.likes.map(likes => <ul key={likes}>{likes}</ul>)}
        </div>
    
    
  );

export default Likes;