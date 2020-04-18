import React from 'react';

const FoodversityContext = React.createContext({
  days: [],
  food: [],
  addFood: () => {},
  deleteFood: () => {},
addDay: () => {},
})



export default FoodversityContext;