import React, {useEffect, useState} from "react";
import Axios from 'axios';
import { Navigate } from "react-router-dom";
import '../App.css';
import {Link} from 'react-router-dom';

export const Registration = ()=> {
    
    const [UsernameReg, setUsernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [cname, setcname] = useState('');
    const [cmobno, setcmobno] = useState('');
    const [caddr, setcaddr] = useState('');


    //const [passwordLog, setpasswordLog] = useState('');
    //const [UsernameLog, setUsernameLog] = useState('');
    
  
    //const [loginStatus, setloginStatus] = useState('NA');
    
    Axios.defaults.withCredentials = true;
  
    
    const register = ()=>{
      Axios.post('http://localhost:3005/registration/register', 
      { username : UsernameReg , 
        password : passwordReg,
        name : cname,
        mobno : cmobno,
        addr : caddr
      }).then( (response)=> {
        if(response.data.regStatus){
          alert('You are Successfully Registered!!');
        }
        else{
          alert('Oop!! Registration failed');
        }
      });
    }; 
  
 
    return (
        <div className="App">
            <div className = "auth-form-container">
                <h1>Registration</h1>
                <from classname="registration-form">
                  <div>
                <input 
                type = "text" 
                placeholder="Customer Name" 
                onChange = {(e)=> {
                setcname(e.target.value)
                }} />
                  </div>

                <div>
                <input 
                type = "text" 
                placeholder="Mobile No" 
                onChange = {(e)=> {
                setcmobno(e.target.value)
                }} 
                />
                </div>

                <div>
                <input 
                type = "text" 
                placeholder="Address" 
                onChange = {(e)=> {
                setcaddr(e.target.value)
                }} 
                />
                </div>
                
                <div>
                <input 
                type = "text"
                placeholder="UserName"  
                onChange = {(e)=> {
                setUsernameReg(e.target.value)
                }} 
                />
                </div>
                
                <div>
                <input 
                type = "password" 
                placeholder="Password" 
                onChange = {(e)=> {
                setpasswordReg(e.target.value)
                }} 
                />
                </div>
                <div><button onClick={register}>Register</button></div>
                
                </from>
                
               <button className="btn"> <Link to="/">Already have an account? Login here</Link></button>
            </div>

            
        </div>
    );
}
