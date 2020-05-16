import React from 'react';
import './CSS/LogIn.css';
import axios from 'axios';
import {Redirect} from  "react-router-dom";
class Login extends React.Component{
    constructor(){
        super();
        
        this.state={
            email:'',
            password:''
        }
        this.submitHandler=this.submitHandler.bind(this);
   
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        console.log("LOgin data", this.state)
        axios.post("http://127.0.0.1:8000/auth-jwt/", this.state)
            .then(response => {
                console.log("token",response.data.token)
                localStorage.setItem("token",response.data.token)
                this.setState({loggedIn:true})
            })
            .catch(error => {
                console.log(error)
            })
       
        }
    render(){
        console.log(this.state.loggedIn)
        if(this.state.loggedIn){
            return <Redirect to='/'/>
          }
        console.log("hns")
        return(
            <div class="body">
            <div class="login-form">
            <form  method="POST">
            <h2 class="text-center">Log in</h2>  
             
            <div class="form-group">
                 <input type="text" class="form-control" placeholder="Email" name="email" onChange={this.changeHandler} />
             </div>
            <div class="form-group">
                 <input type="password" class="form-control" placeholder="Password" name="password"  onChange={this.changeHandler} />
             </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block" onClick={this.submitHandler}>Log in</button>
            </div>
            <div class="clearfix">
                 <label class="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            </div>        
            </form>
            <p class="text-center"> Create an Account </p>
            </div>
             </div>
            )
    }
}
export default Login;