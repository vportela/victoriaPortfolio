import React from 'react'

const MyFoods = (props) => {

   
    const food = props.food
  
    return (
        <div>
            <p> Food {food.name}.</p>
            <p> The flavor is {food.flavor}</p>
            <p> This food is rated {food.rating}</p>
            <br/>
        </div>
    ) 
}
export default MyFoods

