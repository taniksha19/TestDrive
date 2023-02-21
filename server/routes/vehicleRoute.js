//Required imports

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const db = require("../Database/database");
const cors = require('cors');

//Initialization

router.use(cors({
    origin : ["http://localhost:3000"],
    methods : ["GET", "POST", "PUT", "DELETE"],
    credentials : true
}));

router.use(cookieParser());

router.use(bodyParser.urlencoded({extended : true}));

router.use(
    session({
        key : "userId",
        secret : "subscribe",
        resave : false,
        saveUninitialized : false,
        cookie : {
            expires : 	10800000 // 3 hrs expiry of cookie in browser
        }, 
    })
); 

//routes

router.post("/addVeh", (req, res)=>{
    const veh_model = req.body.name;
    const veh_type = req.body.type;
    console.log("reached addveh");
    db.query('insert into vehicle (model, type) values(?, ?)', [veh_model, veh_type], (err, result)=> {
        if(err){
            console.Console.log(err);
            res.send({status : "false"});
        }
        else{
            console.log("added succcess");
            res.send({status : "false"});
        }
    });
});

router.get("/vehDetails", (req, res)=> {
    //res.send({item : "veh details are"});
    console.log("reached veh details");
    //res.send("vehicle information");
     db.query('select * from vehicle', (err, result)=> {
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            //console.log("res send successfully");
            res.send(result);
        }
      });
});

router.put("/updateVeh", (req, res)=> {
    const id = req.body.id;
    const name = req.body.name;
    const type = req.body.type;
    //console.log("reached backend successfully");
    console.log("reached updateVeh");
    db.query('update vehicle set model = ?, type = ? where vehid = ?', [name, type, id], (err, result)=>{
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            console.log("got db result");
            console.log("updated successfully");
            res.send(result);
            console.log("send result successfully ");
        }
    });
});

router.delete("/deleteVeh/:id", (req, res)=>{
    const id = req.params.id;
    //console.log("reached backend successfully");
    console.log("reached deleteVeh");
    db.query('delete from vehicle where vehid = ?', id, (err, result)=> {
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            res.send({status : "true"});
            console.log("send result successfully ");
        }
    });
});

router.post("/vehAvailable", (req, res)=>{
    const vid = req.body.id;
    const tdate = req.body.date.substring(0,10);
    const tslot = req.body.slot;
    console.log(tdate);
    console.log("reached veh backend successfully");
    db.query('select vehavail(?, ?, ?) as status', [vid ,tdate, tslot], (err, result)=> {
        console.log("got response from backend");
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            res.send(result);
            console.log("res send successfully");
        }
    });
});

module.exports = router;