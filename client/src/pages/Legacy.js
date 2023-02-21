import React , {useEffect, useState} from 'react';
import Axios from 'axios';
import Card from "@material-ui/core/Card";
import './styles/table.css';
import DataTable from 'react-data-table-component';
import {ManagerNavBar} from "../components/ManagerNavBar";

export const Legacy = ()=> {

    //Necessary variables
    const [legTDList, setlegTDList] = useState([]);

    //required methods

    useEffect(()=> {
        Axios.get("http://localhost:3005/testdrive/legacy").then((response)=> {
            setlegTDList(response.data);
        });
    }, []);


    //Render page code

    const column_legacy = [
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
            selector : (row) => row.cust_mobno
        },
        {
            name : 'Booking Date',
            selector : (row) => row.td_date
        },
        {
            name : 'Time Slot',
            selector : (row) => row.slot_name
        }
        ,
        {
            name : 'Model',
            selector : (row) => row.model
        },
        {
            name : 'Transmission',
            selector : (row) => row.type
        },
        {
            name : 'Executive Name',
            selector : (row) => row.exe_name
        },
        {
            name : 'Executive MobNo',
            selector : (row) => row.exemobno
        }

    ];

    //Render page code

    return (
        <div  className='bck' >
            
            {<ManagerNavBar/>}
            <br></br>
            <div >
            <div className='head'><h2>Legacy testdrive</h2></div>
            <div className='table'> 
                <Card>
                <DataTable
                columns={ column_legacy}
                data = {legTDList}
                pagination
                />
                </Card>
                
             </div>
            </div>
        </div>
    );
}


