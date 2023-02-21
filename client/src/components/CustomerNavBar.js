import {Link} from 'react-router-dom';
import './styles/nav.css';
import React , {useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";
import Axios from 'axios';
import { PopUp } from './profilePopup';
import './styles/style.css';
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export const CustomerNavBar = ()=> {

  const [userName, setuserName] = useState('');
  const [userId, setUserId] = useState(0);
  const [userRole, setUserRole] = useState('');
  const [profileButton, setprofileButton] = useState(false);
  const [cust_name, set_cust_name] = useState('');
  const [cust_addr, set_cust_addr] = useState('');
  const [cust_mobno, set_cust_mobno] = useState('');

  Axios.defaults.withCredentials = true;

  const logout = ()=> {
     Axios.get('http://localhost:3005/registration/logout').then( (response)=> {
        setUserRole('NA');
     });
  }

  const profile = ()=>{
    Axios.post("http://localhost:3005/customer/customerDetails",{
        id : userId
    }).then((response)=> {  
        set_cust_name(response.data[0].name);
        set_cust_addr(response.data[0].addr);
        set_cust_mobno(response.data[0].mobno);
        setprofileButton(true)
        console.log(response);
    });
  };
  
  useEffect(()=> {
    Axios.get("http://localhost:3005/registration/login").then((response) => {
        console.log("after cookie");
        if(response.data.loggedIn){
            console.log(response);
            setUserId(response.data.user[0].cid);
            setuserName(response.data.user[0].username);
        }
    });
}, []);


  if(userRole == 'NA'){
    return <Navigate to = "/"/>
  }




    return(
        <div className='topnav'>
          <a class="active">Hello {userName} !</a>
          <a  href="/home">Home</a>
          <a href ="/track">TrackTestDrives</a>
           
          <button class="button button2" onClick = {profile}>
            My Profile
          </button>
          
          <div className='topnav-right'> <a onClick={logout}>Logout</a></div>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i></a>

          <PopUp trigger = {profileButton} setTrigger = {setprofileButton}>
                  <br></br>
                  <br></br>
                  <div class="info">
                      <div class='child abc'> 
                      <div>NAME: </div>
                      <div>ADDRESS:</div> 
                      <div>MOBLIE: </div>
                      </div>
                      <div class='child xyz'>
                      <div>{cust_name} </div>
                      <div>{cust_addr}</div> 
                      <div>{cust_mobno}</div>
                      </div>
                  </div>
          </PopUp>
        </div>
    );
};

/*


               <br></br>
               <br></br>
              <div class="info">
                
                 <div class='child abc'> 
                 <div>NAME: </div>
                 <div>ADDRESS:</div> 
                 <div>MOBLIE: </div>
                 </div>
                 <div class='child xyz'>
                 <div>{cust_name} </div>
                 <div>{cust_addr}</div> 
                 <div>{cust_mobno}</div>
                 </div>
                 
                 
       
                        
           </div>
           <button class="button button2" onClick = {profile}>My Profile</button>
                
           


*/