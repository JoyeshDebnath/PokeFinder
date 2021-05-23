import React, { Component } from 'react'
import { BrowserRouter as Router,Link,NavLink,Redirect } from 'react-router-dom';
import Route  from 'react-router-dom/Route';


const Gallery = (params) => {
  return (
    <div>
      <h1>Hello there {params.username } welcome to  the Gallery 😜😝😜</h1>
    </div>
)
}//gallery component


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      Logged_in:false
    }
    this.LoginHandler = this.LoginHandler.bind(this);
  }

  LoginHandler() {
    this.setState({
      Logged_in:true
    })
  }

  render() {
    return (
    
      <Router>
        <div class="App">
          <ul> 
            <li> <NavLink to="/"  exact activeStyle={{ color: 'green'}}>Home</NavLink></li>
         <li> <NavLink to="/about" exact activeStyle={{ color: 'green'}}>About</NavLink></li>
            <li> <NavLink to="/contacts" activeStyle={{ color: 'green'}}>Contacts </NavLink></li>
            <li><NavLink to="/gallery/Joyesh" exact activeStyle={{ color: 'green'}}>Joyesh</NavLink></li>
          </ul>
          
          <button type="submit" value="log in" onClick={ this.LoginHandler}>Log in </button>

          
          <Route path="/" exact strict render={
            () => {
              return <h1>Welcome to The Home Page </h1>}
          } />

          <Route path="/about" exact strict render={() => <h1>Hello I am the About Page ..😁😀</h1>} />
          
          <Route path="/contacts" exact strict render={() => <h1>Hi there I am the Contacts page 🤐</h1>} />
          
          <Route path="/Gallery/:username" strict exact render={({ match }) => (this.state.Logged_in ? (<Gallery username={ match.params.username}/>):(<Redirect to="/" />))} />


        </div>
      </Router>
    )
  }
}

export default App;