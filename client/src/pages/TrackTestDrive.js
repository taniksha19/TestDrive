import React , {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import Axios from 'axios';
import Card from "@material-ui/core/Card";
import './styles/table.css';

import {CustomerNavBar} from "../components/CustomerNavBar";
import './styles/style.css';


export const TrackTestDrive = ()=> {
    //Initialization
    const [userId, setUserId] = useState(0);
    const [userName, setuserName] = useState('');

    const [history, setHistory] = useState([]);
    const [active, setActive] = useState([]);

    Axios.defaults.withCredentials = true;

    
    //Required methods
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


    const ShowTrack = (id)=> {
        Axios.post("http://localhost:3005/customer/track",{
            id : userId
        }).then((response)=> {
            setActive(response.data);
            console.log(response);
        });
    };

    const ShowHistory = (id)=> {
        Axios.post("http://localhost:3005/customer/history",{
            id : userId
        }).then((response)=> {
            
            setHistory(response.data);
            console.log(response);
        });
    };

    const Cancel = (id)=> {
        Axios.delete(`http://localhost:3005/customer/cancel/${id}`).then((response)=> {
            if(response.data[0].cancelStatus){
                alert('Cancelled successfully');
            }
            else{
                alert('Cancel unsuccessful');
            }
        });
    };


    //Columns

    const column_history = [
        {
            name : 'Model',
            selector : (row) => row.model
        },
        {
            name : 'Transmission Type',
            selector : (row) => row.type
        },
        {
            name : 'Booking Date',
            selector : (row) => row.td_date
        },
        {
            name : 'Booking Slot',
            selector : (row) => row.slot_name
        },
        {
            name : 'Executive Name',
            selector : (row) => row.exe_name
        }
        ,
        {
            name : 'Executive MobNo',
            selector : (row) => row.mobno
        }

    ];

    const column_track = [
        {
            name : 'Model',
            selector : (row) => row.model
        },
        {
            name : 'Transmission Type',
            selector : (row) => row.type
        },
        {
            name : 'Booking Date',
            selector : (row) => row.td_date
        },
        {
            name : 'Booking Slot',
            selector : (row) => row.td_slot
        },
        {
            name : 'Executive Name',
            selector : (row) => row.exename
        }
        ,
        {
            name : 'Executive MobNo',
            selector : (row) => row.exemobno
        },
        {
            name : 'Status',
            selector : (row) => row.status
        },
        {
            name : 'Cancel-Testdrive',
            cell : (row)=> (
                <button onClick={()=> {Cancel(row.tid)}}>cancel</button>
            )
        }

    ];



    //render page content

    return (
        <div className='bck'>
            
            {<CustomerNavBar/>}
            
            <div className='profile'>
            <button onClick={ShowHistory}>ShowHistory</button>
            <button onClick={ShowTrack}>ShowTrack</button>
            </div>
            <div >
            <div className='head'><h2>Track active testdrive</h2></div>
                <div className='table'>
                <Card>
                <DataTable
                columns={ column_track}
                data = {active}
                />
                </Card>
                </div>
            </div>
<br></br>
            
            <div>

             <div className='head'><h2>Past testdrive</h2></div>
             <div className='table'>
                <Card>
                <DataTable
                columns={ column_history}
                data = {history}
                />
                </Card>
                </div>
            </div>
            
        </div>
    );
}

