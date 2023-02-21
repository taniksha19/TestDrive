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

router.post("/customerDetails", (req, res)=> {
    const cust_id = req.body.id;
    console.log(cust_id);
    console.log("reached backend successfully");
    db.query('select name, addr, mobno from customerdetails where cid = ?', cust_id, (err, result)=> {
      if(err){
          console.log(err);
          res.send({status : "false"});
      }
      else{
          console.log("res send successfully");
          res.send(result);
      }
    });
});

router.post("/history", (req, res)=> {
    console.log("reached backend successfully");
    const cust_id = req.body.id;
    console.log(cust_id);
    db.query("select model, type, td_date, slot_name, exe_name, mobno from legacytestdrive where cid = ?", cust_id, (err, result)=> {
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            console.log("res send successfully");
            console.log(result);
            res.send(result);
        }
    });
});

router.post("/bookTestDrive", (req, res)=> {
    console.log("reached backend successfully");
    const cust_id = req.body.cid;
    const veh_id = req.body.vid;
    const tdate = req.body.date;
    const tslot = req.body.slot;
    db.query("insert into testdrive (cid, vehid, td_date, td_slot) values(?, ?, ?, ?)", [cust_id, veh_id, tdate, tslot], (err, result)=> {
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            console.log("res send successfully");
            res.send({status : "true"});
        }
    });
});

router.post("/track", (req, res)=> {
    console.log("reached backend successfully");
    const cust_id = req.body.id;
    console.log(cust_id);
    db.query("select model, type, td_date, td_slot, exename, exemobno, status, tid from testdriveinfo where cid = ? and status <> 'd' ", cust_id, (err, result)=> {
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            console.log("res send successfully");
            console.log(result);
            res.send(result);
        }
    });
   
});

router.delete("/cancel/:id", (req, res)=>{
    const t_id = req.params.id;
    console.log("reached backend successfully");
    db.query('delete from testdrive where tid = ?', t_id, (err, result)=> {
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            res.send({status : "false"});
            console.log("send result successfully ");
        }
    });
});

module.exports = router;