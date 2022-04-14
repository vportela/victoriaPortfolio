import React from 'react'

const MyPlaces2 = (props) => {

    
    const name = props.place.country
    const city = props.city.popularCity
    const visits = props.visits.visits
    return (
        <div>
            <p> Second Country {name}.</p>
            <p> {name}'s popular city is {city}.</p>
            <p> Victoria has visited {city}, {name} {visits} times.</p>
        </div>
    ) 
}
export default MyPlaces2