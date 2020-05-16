import React from 'react';
import './CSS/SignUp.css';
import axios from 'axios';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            join_code:'',
            fullname:'',
            username:'',
            email:'',
            password:'',
            confirm_password:''

        }
        this.submitHandler=this.submitHandler.bind(this);

    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post("http://localhost:8000/user/list/", this.state  
               )
            .then(response => {
                    console.log(response)
            })
            .catch(error => {
            console.log(error)
            })}

   
    render(){
        return(
            <div class="body">
            <div class="login-form">
            <form  method="POST" >
      
            <h2 class="text-center">Signup</h2>       
            <div class="form-group">
            <input type="text" class="form-control" name="join_code" placeholder="Join Code" value={this.state.join_code}  onChange={this.changeHandler}/>
            </div>
            <div class="form-group">
            <input type="text" class="form-control" name="fullname" placeholder="FullName"  value={this.state.fullname} onChange={this.changeHandler}/>
            </div>
            <div class="form-group">
            <input type="text" class="form-control" name="username" placeholder="UserName"  value={this.state.username}  onChange={this.changeHandler}/>
            </div>
            <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" name="email"  value={this.state.email} onChange={this.changeHandler}/>
            </div>
            
            <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" name="password"  value={this.state.password} onChange={this.changeHandler}/>
            </div>
            <div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password"  value={this.state.confirm_password} onChange={this.changeHandler}/>
            </div>
        <div class="form-group">
            <button type="button"  class="btn btn-primary btn-block" onClick={this.submitHandler}>Signup</button>
        </div>
               
            </form>
 
</div>
</div>

        )
    }

}
export default SignUp;