import React from 'react'

const MyPlaces4 = ({place,anotherPlace}) => {
 
    return (
        <div>
            <p> Country {place.country}.</p>
            <p> {place.country}'s popular city is {place.popularCity}.</p>
            <p> Victoria has visited {place.popularCity}, {place.country} {place.visits} times.</p>
            <br/>
            mewomewmoewmomewmomoew
            <p> country {anotherPlace.country}</p>
        </div>
    ) 
}
export default MyPlaces4

//DESTRUCTURING

const place2 ={
    country: "America",
    popularCity: "miami",
    visits: "infinite"
}


const name2 = place2.country

//name name2 (which is being assigned to place.country) is an object
//so to call on this const you can make name2 into an object too. 
//below, instead of name2 we used the properties from the places object on app.js

const {country, popularCity, visits} = place2
console.log("destructuring.... place2", place2)