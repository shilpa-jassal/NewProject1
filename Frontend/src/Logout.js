import React from 'react';
class Logout extends React.Component{
     
    render(){
        return(
            localStorage.clear("token")
        )
    }
}
export default Logout;