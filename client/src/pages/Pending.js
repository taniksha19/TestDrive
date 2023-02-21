import React , {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import Card from "@material-ui/core/Card";
import Axios from 'axios';
import './styles/table.css';
import {ManagerNavBar} from "../components/ManagerNavBar";


export const Pending = ()=> {

    //Required initialization
    const [pending, setPending] = useState([]); 
    const [availExeList, setAvailExeList] = useState([]); 
    const [exeId, setexeId] = useState(0);
    const [vehId, setVehId] = useState(0);
    const [td_date, set_td_date] = useState(null);
    const [td_slot, set_td_slot] = useState('');
    const [vehAvailStatus, setVehAvailStatus] = useState('');

    
    //required methods
    useEffect(()=> {
        Axios.get("http://localhost:3005/testdrive/viewPending" ).then((response)=> {
            if(response.data.length > 0){
                setPending(response.data);
                console.log(response);
            }
        });
    }, []);

    /*const showPending = ()=>{
        Axios.get("http://localhost:3005/viewPending" ).then((response)=> {
            if(response.data.length > 0){
                setPending(response.data);
                console.log(response);
            }
            else{
                alert('No pending testdrives');
            }
        });
    };*/

    const Confirm = (id)=>{
        if(exeId.length > 0){
            Axios.put("http://localhost:3005/testdrive/confirm", 
            { tid : id,
            eid : exeId
            }).then((response)=> {
                alert("confirmed successfully");
                }
            );
        }
        else{
            alert("Enter Executive ID to proceed");
        }
    };

    const availExe = ()=>{
        if(td_date.length > 0 && td_slot.length > 0){    
            Axios.post("http://localhost:3005/executive/availExe",{
                date : td_date,
                slot : td_slot
            }).then((response)=> {
                setAvailExeList(response.data);
                console.log(response);
            });
        }
        else{
            alert("Select date adn time slot");
        }
    };

    const vehAvailCheck = ()=>{
        if(td_date.length > 0 && td_slot.length > 0 && vehId != 0){    
            Axios.post("http://localhost:3005/vehicle/vehAvailable",{
                id : vehId,
                date : td_date,
                slot : td_slot
            }).then((response)=> {
                setVehAvailStatus(response.data[0].status);
                console.log(response);
            });
        }
        else{
            alert("Enter Vehicle ID to proceed");
        }
    };


    //Column

    const column_pending = [
        {
            name : 'Customer Name',
            selector : (row) => row.name
        },
        {
            name : 'Customer Address',
            selector : (row) => row.addr
        },
        {
            name : 'Customer MobNo',
            selector : (row) => row.mobno
        },
        {
            name : 'Booking Date',
            selector : (row) => row.td_date
        },
        {
            name : 'Time Slot',
            selector : (row) => row.td_slot
        }
        ,
        {
            name : 'Vehicle ID',
            selector : (row) => row.vehid
        },
        {
            name : 'Exe-Id',
            cell : (row)=> (
                <input type = "text" size = "7" 
                    onChange={(event)=> {
                        setexeId(event.target.value);
                    }}
                />
            )
        },
        {
            name : 'Confirm',
            cell : (row)=> (
                <button onClick={()=> {Confirm(row.tid)}}>confirm</button>
            )
        }
    ];

    const column_Executive = [
        {
            name : 'Executive ID',
            selector : (row) => row.eid
        },
        {
            name : 'Executive Name',
            selector : (row) => row.exename
        },
        {
            name : 'Executive MobNo',
            selector : (row) => row.exemobno
        }
    ];


    //Render page content
    return (
        <div class='bck'>
            
            {<ManagerNavBar/>}
            
            <div className='profile bck' >
            <div class='head'><h2>Manage Pending testdrives</h2></div>
            <div>
                <h3>"Availability Check Parameters"</h3>
                <div>

                    <div><label><b>Date</b></label></div>
                    <input type = "date"  
                    onChange={(event)=> {
                        set_td_date(event.target.value);
                        }}
                    />

                    <div><label>Slot(Timmings)</label></div>
                    <br></br>
                    
                    <select
                        value={td_slot}
                        onChange={(event) =>{
                            set_td_slot(event.target.value);
                        }}
                    >
                        
                        <option values = "">select time slot</option>
                        <option values = "10:11">10:00 am: 11:00 am</option>
                        <option values = "11:12">11:00 am: 12:00 pm</option>
                        <option values = "3:4">3:00 pm : 4:00 pm</option>
                        <option values = "4:5">4:00 pm : 5:00 pm</option>
                        <option values = "5:6">5:00 pm : 6:00 pm</option>
                    </select>

                </div>
                <div>
                <div class='head'><h2>Vehicle Availability</h2></div>
                <br></br>
                    <div>
                    <label>Vehicle ID : </label>
                        <input 
                            type = "text"
                            onChange = {(event)=> {
                            setVehId(event.target.value);
                        }}
                    /></div>
                    <button class='button1' onClick = {vehAvailCheck} >Check Vehicle Availability</button>
                    <div class='status'><h2>Vehicle Status: {vehAvailStatus}</h2></div>
                    <br></br>
                </div>

                <div>
                <div class='head'><h2>Executive Availability</h2></div> 
                    <button class='button1' onClick = {availExe} >Show Available Executives</button>
                    <div class='table'>
                    <Card>
                    <DataTable
                        columns={ column_Executive}
                        data = {availExeList}
                        pagination
                    />
                    </Card>
                    </div>
                    <br></br>
                </div>

                <div>
                <div class='head'><h2>Pending Testdrives</h2></div>
                  <div class='table'>
                    <Card> 
                  <DataTable
                    columns={ column_pending}
                    data = {pending}
                    pagination
                    />
                    </Card> 
                    </div>
                </div>
            </div>    
        </div>
        </div>
    );
}

