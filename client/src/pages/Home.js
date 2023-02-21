import React , {useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";
import Axios from 'axios';
import { Customer } from '../components/Customer';
import { Manager } from '../components/Manager';
import './styles/Home.css';


export const Home = ()=> {
    
    //Required initializations
    const [userRole, setUserRole] = useState('');
    const [userName, setuserName] = useState('');

    
    
    Axios.defaults.withCredentials = true;

    //Required Methods

    useEffect(()=> {
        Axios.get("http://localhost:3005/registration/login").then((response) => {
            console.log("after cookie");
            if(response.data.loggedIn){
                console.log(response);
                setUserRole(response.data.user[0].role);
                setuserName(response.data.user[0].username);
            }
            else{
                setUserRole('NA');
            }
        });
    }, []);

    /*const logout = ()=> {
        Axios.get('http://localhost:3005/logout').then( (response)=> {
          setUserRole('NA');
        });
    }*/
    
    if(userRole == 'NA'){
        return <Navigate to = "/"/>
      }

    //Render Page Content

    return (
        <div className ='Home'>
            
            {userRole == 'c' && <Customer/>}
            {userRole == 'm' && <Manager/>}
           
            

        </div>
    );
}

