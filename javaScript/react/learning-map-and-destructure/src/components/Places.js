import React from 'react'

const MyPlaces = (props) => {

    const name = props.name
    const city = props.city
    const visits = props.visits
    const place = props.places

    return (
        <div>
            <p>Country Name: {name}</p>
            <p>Popular City: {city}</p>
            <p>Victoria has been to {city}, {name} {visits} times.</p>
        
        </div>
    ) 
}
export default MyPlaces