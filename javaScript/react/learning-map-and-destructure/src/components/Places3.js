import React from 'react'

const MyPlaces3 = (props) => {

   
    const place = props.place
  
    return (
        <div>
            <p> Country {place.country}.</p>
            <p> {place.country}'s popular city is {place.popularCity}.</p>
            <p> Victoria has visited {place.popularCity}, {place.country} {place.visits} times.</p>
            <br/>
        </div>
    ) 
}
export default MyPlaces3

