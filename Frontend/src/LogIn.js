import React from 'react';
import './CSS/LogIn.css';
class Login extends React.Component{
    render(){
        return(
            <div class="body">
            <div class="login-form">
            <form  method="POST">
    
            <h2 class="text-center">Log in</h2>  
             
            <div class="form-group">
                 <input type="text" class="form-control" placeholder="Email" name="email"  />
             </div>
            <div class="form-group">
                 <input type="password" class="form-control" placeholder="Password" name="password"  />
             </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Log in</button>
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