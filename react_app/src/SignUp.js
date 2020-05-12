import React from 'react';
import './CSS/SignUp.css';
class SignUp extends React.Component{
   
    render(){
        return(
            <div class="body">
            <div class="login-form">
            <form  method="POST">
      
            <h2 class="text-center">Signup</h2>       
            <div class="form-group">
            <input type="text" class="form-control" name="join_code" placeholder="Join Code" />
            </div>
            <div class="form-group">
            <input type="text" class="form-control" name="fullname" placeholder="FullName" />
            </div>
            <div class="form-group">
            <input type="text" class="form-control" name="username" placeholder="UserName" />
            </div>
            <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" name="email" />
            </div>
            
            <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" name="password" />
            </div>
            <div class="form-group">
            <input type="text" class="form-control" name="confirm password" placeholder="Confirm Password" />
            </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Signup</button>
        </div>
               
            </form>
 
</div>
</div>

        )
    }

}
export default SignUp;