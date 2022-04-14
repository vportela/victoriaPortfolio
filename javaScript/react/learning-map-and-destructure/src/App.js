import React from 'react'
import MyFoods from './components/Foods'
import MyPlaces from './components/Places'
import MyPlaces2 from './components/Places2'
import MyPlaces3 from './components/Places3'
import MyPlaces4 from './components/Places4'


const App = () => {
  
  const places = [
    {
      id:1,
      country:"Japan",
      popularCity: "Tokyo",
      visits: 2,
    },
    {
      id:2,
      country:"Italy",
      popularCity: "Catania",
      visits: 0,
    },
    {
      id:3,
      country:"Canada",
      popularCity: "Toronto",
      visits: 15,
    },
  ]

  const foods = [
    {
      id:1,
      name:"pizza",
      flavor: "pepperoni",
      rating: "9/10",
    },
    {
      id:2,
      name:"ice cream",
      flavor: "vanilla",
      rating: "10/10",
    },
    {
      id:3,
      name:"fish",
      flavor: "icky",
      rating: "0/10",
    },
  ]

  const place2 ={
    country: "America",
    popularCity: "miami",
    visits: "infinite"
}

  return (
    <>
      <h1>Victoria's Travels</h1>
      <p> My first country is: {places[0].country}</p>
      <p> A popular city is: {places[0].popularCity}</p>
      <p> I have been to Japan {places[0].visits} times.</p>
    <hr/>

      <h2> Using MyPlaces component</h2>

      <MyPlaces
        name= {places[0].country}
        city= {places[0].popularCity}
        visits= {places[0].visits}
      />

    <hr/>

      <h2>Using MyPlaces2 component</h2>
      
      <MyPlaces2
        place={places[1]}
        city = {places[1]}
        visits ={places[1]}
      />
    <hr/>
      <h2>Using .map finally</h2>
      {places.map(place => (
        <MyPlaces3
          key={place.id}
          place={place}
        />
        )
      )}
      <hr/>
      <h2> destructuring MyPlaces4</h2>
        {places.map(place => (
          <MyPlaces4
            key={place.id}
            place={place}
            anotherPlace={place2}
        />
        ))}
      <hr/>
      <h2> Food Time! using .map</h2>

     {foods.map(food => (
       <MyFoods
        key={food.id}
        food={food}
       />
     ))}

      </>
        
  )
}

export default App;
