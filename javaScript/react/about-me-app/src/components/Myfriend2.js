import React from "react";

// const MyFriend2 = (props) => (
//     //valid JS can only go here before the return.
//     //when you use () instead of {} you are automatically returning
//     //thus a console.log for example will not work unless you used {}
//     //and put the JS before the return.
//     <div>
//         <p>my friend's name: {friend.name}</p>
//     </div>
// )

// export default MyFriend2;


const MyFriend2 = (props) =>{
    const friend = props.friend

    return (
        <div>
            <p> my friend's name: {friend.name}</p>
            <p> my friend's age: {friend.age}</p>
            <p> my friend's favorite color: {friend.favoriteColor}</p>
        </div>
    )
}


export default MyFriend2


// a map is basically a 4 each loop but its different.
//the difference is it returns a new array. It returns the 
// same amount of items.
// so you MUST return something for each time you iterate through the array.
//.map is very important, you need to memorize it. 