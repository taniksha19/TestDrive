import {Link} from 'react-router-dom';
import React , {useEffect, useState} from 'react';
import './styles/nav.css';
import { Navigate } from "react-router-dom";
import Axios from 'axios';
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



export const ManagerNavBar = ()=> {

  const [userRole, setUserRole] = useState('');

  Axios.defaults.withCredentials = true;

  const logout = ()=> {
     Axios.get('http://localhost:3005/registration/logout').then( (response)=> {
        console.log(response.data);
        setUserRole('NA');
     });
  }

  if(userRole == 'NA'){
    return <Navigate to = "/"/>
  }

    return(
        <div className='topnav'>
          <a class="active">Hello Manager</a>
          <a  href="/home">Home</a>
          <a href="/pending">Pending TestDrives</a>
          <a href="/legacy">Legacy TestDrive</a>
          <a href="/administration">Administration</a>
         <div className='topnav-right'> <a onClick={logout}>Logout</a></div>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i></a>
        </div>
    );
};