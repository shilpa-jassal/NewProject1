import React from 'react';
import './App.css';
import {Switch,Route,BrowserRouter as Router } from  "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import LeadDashboard from './LeadDashboard';

class App extends React.Component {
render(){
  return (
    <div> 
      <Router>
      <Switch>
        <Route exact path='/' component={LeadDashboard}/>
        <Route   path='/LogIn' component={LogIn}/>
        <Route path='/signup' component={SignUp}/>

      </Switch>
      </Router> 
    </div>);
}
}
export default App;