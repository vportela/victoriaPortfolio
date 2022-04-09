import React from 'react';

import SuperPeople from './SuperPeople.js'
import Restaurants from './Restaurants.js'

const superPeople = [
  {
    name: 'Thanos',
    power: 'The Snap!'
  },
  {
    name: 'Iron Man',
    power: 'Intelligence x 3000'
  },
  {
    name: 'Dr Strange',
    power: 'the Time Stone'
  },
  {
    name: 'mr banana',
    power: 'banana',
    poopy: 'stinky'
  },

];

const restaurants = ['Cosmic Stones Wings', 'BK', 'Rye of Agamotto']

const MainComponent = (props) => (
  <div>
    <SuperPeople
      superPeople={superPeople}
    />
    <Restaurants
      restaurants={restaurants}
    />
  </div>
)

export default MainComponent;