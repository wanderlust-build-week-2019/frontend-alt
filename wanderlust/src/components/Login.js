import React from 'react'
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state =   { 
            username: '',
            password: '',
            loginError: null
          
          }
     
    }
 
  changeHandle = e => {
      this.setState({
        
        [e.target.name]: e.target.value }
        
)

  };
   
  LoginSubmit = e =>{  
    e.preventDefault()
    
    axios
    .post('https://wanderlust-api.herokuapp.com/auth/login', this.state)
    .then( res => {  
      localStorage.setItem('token',res.data.token)

      this.setState({
        loginError: null
      });

      this.props.history.push("/tour")

    }


    )
    .catch (err =>{
        console.log(err)

        this.setState({
          loginError: "failed login"
        });

    })

     }


    //  https://wanderlust-api.herokuapp.com/auth/guide/register
    //  https://wanderlust-api.herokuapp.com/auth/user/register
    //  https://wanderlust-api.herokuapp.com/auth/login/




    render (){
   
    return (
      <div>
        <h3>Welcome to React WanderLust</h3>
        <div  >Please Login</div>
        {this.state.loginError && <p>Error on login, try again</p>}
        <div className ='Login'>
        <form onSubmit={this.LoginSubmit}>
          <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.changeHandle}
            />
          
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandle}
            />
            <br />
            <button color="success" size="large">
              Log In
            </button>
        </form>
        </div>
           
      </div>
         
     
 
 
      
    
    

   )}


}



export default Login;