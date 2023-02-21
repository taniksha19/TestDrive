import React , {useEffect, useState} from 'react';
import Axios from 'axios';
import DataTable from 'react-data-table-component';
import {ManagerNavBar} from "../components/ManagerNavBar";
import './styles/style.css';
import Card from "@material-ui/core/Card";
import './styles/table.css';

export const Administrate = ()=> {

    //Required functions and variables

    const [exeName, setExeName] = useState("");
    const [exeMobNo, setExeMobNo] = useState("");
    const [vehModel, setvehModel] = useState("");
    const [vehType, setvehType] = useState("");

    const [exeList, setExeList] = useState([]);
    const [vehList, setVehList] = useState([]);

    //Executive CRUD operations

    const addExe = ()=> {
        if(exeName.length > 0 && exeMobNo.length == 10){
        Axios.post("http://localhost:3005/executive/addExe", 
        {exeName : exeName, exeMobNo : exeMobNo
        }).then(() => {
            setExeList([
            ...exeList,
            {
                exename : exeName,
                exemobno : exeMobNo
            }
            ]);
        });
        }
        else{
            alert("Enter Executive name and mobno");
        }
    };

    const showExes = ()=>{
        Axios.get("http://localhost:3005/executive/exeDetails").then((response)=> {
            setExeList(response.data);
            console.log(exeList);
        });
    };

    const updexe = (id)=>{
        if(exeName.length > 0 && exeMobNo.length == 10){
        Axios.put("http://localhost:3005/executive/updateExe", 
        {exeName : exeName, exeMobNo : exeMobNo, exeId : id
        }).then((response)=> {
            setExeList(exeList.map((val)=>{
                if(val.eid == id){
                    return {eid : id, exename : exeName, exemobno : exeMobNo};
                }
                else {
                    return val;
                }
            }));
            alert("update success");
            }
        );
        }
        else{
            alert("Enter Executive name and mobno");
        }
    };

    const delexe = (id)=> {
        Axios.delete(`http://localhost:3005/executive/deleteExe/${id}`).then((response)=> {
            alert('Delete successfully');
        });
    };
    //--------------------------------------------------------------------------------------------


    //Vehicle CRUD operations

    const addVeh = ()=> {
        if(vehModel.length > 0 && vehType.length == 1){
        Axios.post("http://localhost:3005/vehicle/addVeh", 
        {name : vehModel, type : vehType
        }).then((response) => {
            if(response.status)
                setVehList([
                ...vehList,
                {
                    model : vehModel,
                    type : vehType
                }
                ]);
        });
        }
        else{
            alert("Enter vehicle model and type");
        }
    };

    const showVeh = ()=>{
        Axios.get("http://localhost:3005/vehicle/vehDetails").then((response)=> {
            setVehList(response.data);
        });
    };

    const updVeh = (id)=>{
        if(vehModel.length > 0 && vehType.length == 1){
            Axios.put("http://localhost:3005/vehicle/updateVeh", 
            {name : vehModel, type : vehType, id : id
            }).then((response)=> {
                setVehList(vehList.map((val)=>{
                    if(val.vehid == id){
                        return {vehid : id, model : vehModel, type : vehType};
                    }
                    else {
                        return val;
                    }
                }));
                alert("update success");
                }
        );
        }
        else{
            alert("Enter vehicle model and type");
        }
    };

    const delVeh = (id)=> {
        Axios.delete(`http://localhost:3005/vehicle/deleteVeh/${id}`).then((response)=> {
            alert('Delete successfully');
        });
    };

    const column_Vehicle = [
        {
            name : 'Model',
            selector : (row) => row.model
        },
        {
            name : 'Transmission Type',
            selector : (row) => row.type
        },
        {
            name : 'Update',
            cell : (row)=> (
                <button onClick={()=> {updVeh(row.vehid)}}>Update</button>
            )
        },
        {
            name : 'Delete',
            cell : (row)=> (
                <button onClick={()=> {delVeh(row.vehid)}}>Delete</button>
            )
        }
    ];

    const column_Executive = [
        {
            name : 'Executive Name',
            selector : (row) => row.exename
        },
        {
            name : 'Executive MobNo',
            selector : (row) => row.exemobno
        },
        {
            name : 'Update',
            cell : (row)=> (
                <button onClick={()=> {updexe(row.eid)}}>Update</button>
            )
        },
        {
            name : 'Delete',
            cell : (row)=> (
                <button onClick={()=> {delexe(row.eid)}}>Delete</button>
            )
        }
    ];

    //------------------------------------------------------------------------------------------

    //Render page content
    return (
        <div className='bck'>
            
            <div>
                
                {<ManagerNavBar/>}
                
            </div>

    <div className='bck'>
            <div >
            <div class='head'><h2>Manage Executives</h2></div>
                <div class='profile'>
                    <label>Executive Name  </label>
                    <input 
                        type = "text"
                        onChange = {(event)=> {
                        setExeName(event.target.value);
                        }}
                        
                    />
                    
                    <label>                        Mobile No  </label>
                    <input 
                        type = "text"
                        onChange = {(event)=> {
                        setExeMobNo(event.target.value);
                        }}
                    />
                    <button onClick = {addExe}>Add executive</button>
                    
                </div>

                <div class='profile'>
                    <button onClick = {showExes}>Show executives</button>
                    <div className='table'>
                <Card>
                   <DataTable
                        columns={ column_Executive}
                        data = {exeList}
                        pagination
                    />
                     </Card>
                     </div>
                </div>
            </div>

            <br></br>


            <div>
            <div class='head'><h2>Manage Vehicle Models</h2></div>
                <div class='profile'>
                    <label>Model Name  </label>
                    <input 
                        type = "text"
                        onChange = {(event)=> {
                        setvehModel(event.target.value);
                        }}
                    />
                    <label>     Vehicle Type (a/m)</label>
                    <input 
                        type = "text"
                        onChange = {(event)=> {
                        setvehType(event.target.value);
                        }}
                    />
                    <button onClick = {addVeh}>Add Model</button>
                    <br></br>
                </div>

                <div class='profile'>
                    <button onClick = {showVeh}>Show Vehicle Models</button>
                <div className='table'>
                <Card>
                    <DataTable
                        columns={ column_Vehicle}
                        data = {vehList}
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

