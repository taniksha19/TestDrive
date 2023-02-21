import React , {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import Axios from 'axios';
import {ManagerNavBar} from "./ManagerNavBar";
import './styles/style.css';


export const Manager = ()=> {

    //Required functions and variables
    const [testDriveList, setTestDriveList] = useState([]);


    //On page refresh
    useEffect(()=>{
        Axios.get("http://localhost:3005/testdrive/viewConfirmed").then((response)=> {
            if(response.data.length > 0){
                console.log(response);
                setTestDriveList(response.data);
            }
        });
    }, []);


  

    //Confirmed testdrives functions-----------------------------------------

    /*onst showConfirmedTD = ()=>{
        Axios.get("http://localhost:3005/viewConfirmed").then((response)=> {
            if(response.data.length > 0){
                console.log(response);
                setTestDriveList(response.data);
            }
            else{
                alert('No confirmed testdrives available');
            }
        });
    };*/

    const doneTestDrive = (id)=>{
        Axios.put("http://localhost:3005/testdrive/done", 
        { tid : id
        }).then((response)=> {
                if(response.data.doneStatus == "false"){
                    alert("done failed!!");
                }
                else{
                    alert("Testdrive closed successfully!!");
                }
            }
        );
    };

    //Columns

    const column_Confirmed = [
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
        },
        {
            name : 'Model',
            selector : (row) => row.model
        },
        {
            name : 'Transmission Type',
            selector : (row) => row.type
        },
        {
            name : 'Executive Name',
            selector : (row) => row.exename
        },
        {
            name : 'Executive MobNo',
            selector : (row) => row.exemobno
        },
        {
            name : 'Close',
            cell : (row)=> (
                <button onClick={()=> {doneTestDrive(row.tid)}}>Done</button>
            )
        }
    ];




    //-----------------------------------------------------------------------

    return (
        <div>
            
            {<ManagerNavBar/>}
            
            <div className='profile bck'>
            <br></br>
            <div class='head'><h2>Confirmed Test-Drives</h2></div>
                <DataTable
                    columns={ column_Confirmed }
                    data = {testDriveList}
                />
            </div>

        </div>
    );
}