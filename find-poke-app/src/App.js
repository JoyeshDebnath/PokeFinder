import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Pokemon from './Components/Pokemon'
import PokemonDash from './Components/PokemonDash'




const App = () => {
  return (
    
      <Switch>
      <Route
        exact
        path="/"
        render={(props) => <PokemonDash {...props} />}
      />

      <Route
        exact
        path="/:pok_id"
        render={(props => <Pokemon{...props} />)}
      />
      
      </Switch>
      
    
   
  )
}

export default App
