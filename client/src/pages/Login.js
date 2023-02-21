import React, {useEffect, useState} from "react";
import Axios from 'axios';
import { Navigate } from "react-router-dom";
import '../App.css';
import {Link} from 'react-router-dom';



export const Login = ()=>{
    const [passwordLog, setpasswordLog] = useState('');
    const [UsernameLog, setUsernameLog] = useState('');
    
  
    const [loginStatus, setloginStatus] = useState('NA');
    
    Axios.defaults.withCredentials = true;

    const login = ()=>{
        Axios.post('http://localhost:3005/registration/login', 
        { username : UsernameLog , 
          password : passwordLog
        }).then( (response)=> {
          console.log(response.data);
          if(response.data.message){
            alert('Wrong Username or Password');
          }
          else{
            setloginStatus(response.data[0].username);
          }
        });
      };

      useEffect(()=>{
        Axios.get("http://localhost:3005/registration/login").then((response) => {
          if(response.data.loggedIn){
            console.log(response);
            setloginStatus(response.data.user[0].role);
          }
          else{
            setloginStatus('NA');
          }
        });
      }, [])
  
      if(loginStatus != 'NA'){
        return <Navigate to = "/Home"/>
      }
      
    return(
      <div className="App">
       <div className = "auth-form-container">
        
                <h1>Login</h1>
                <form classname="login-form">
                <div>
                <input type = "text" placeholder="User Name" className="form-input" onChange = {(e)=> {setUsernameLog(e.target.value)}} />
                </div>
                
                <div>
                <input type = "password" placeholder="Password"  onChange = {(e)=> {setpasswordLog(e.target.value)}} />
                </div>
                
                <button onClick={login}> Login </button>
                </form>
                <button className="btn"><Link to="/registration">Don't have an account? Register here</Link></button>
        </div>
</div>
      
            
    );
    


}
    
