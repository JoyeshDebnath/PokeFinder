import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import Home from './Home'

export const App = () => {
  return (
    <div>
      <button>Home </button>
      <button>About us </button>
      <button>Contact me </button>

      <Switch>
        <Route path="/about">
           <About/>
        </Route>
      </Switch>
    </div>
  )
}


export default App;