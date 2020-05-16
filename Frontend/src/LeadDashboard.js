import React from 'react';
import {Redirect} from "react-router-dom";
class LeadDashboard extends React.Component{
    constructor(){
        super();
        const token= localStorage.getItem("token")
        console.log("nothing token",token)
        let loggedIn =true
    
        if(token === ''){
            loggedIn=false
            console.log("am here",loggedIn)
        }
        this.state={
            loggedIn
        }
    }
        render(){
            if(this.state.loggedIn === false){
                return <Redirect to="/login"/>
            }
            return(

                <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                
                </li>
                <li class="nav-item">
                <a href="/Logout">Logout</a>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
            <h1>LeadDashboard</h1>
            </div>
            )
        }
    }
 export default LeadDashboard;