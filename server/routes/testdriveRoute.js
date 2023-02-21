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

router.get("/viewConfirmed", (req, res)=> {
    db.query("select name, addr, mobno, tid, td_date, td_slot, model, type, exename, exemobno from testdriveinfo where status = 'c' ", (err, result)=> {
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

router.put("/done", (req, res)=> {
    const id = req.body.tid;
    
    console.log("reached backend successfully");

    db.query("update testdrive set status = 'd' where tid = ?; delete from testdrive where tid = ?;", [id, id], (err, result)=>{
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            console.log("got db result");
            console.log("updated successfully");
            res.send({status : "true"});
        }
    });
});

router.get("/viewPending", (req, res)=> {
    db.query("select name, addr, mobno, tid, td_date, td_slot, vehid from testdriveinfo where status = 'p' ", (err, result)=> {
      if(err){
          console.log(err);
          res.send({status : "false"});
      }
      else{
          //console.log(result[0].td_date);
          console.log("res send successfully");
          res.send(result);
      }
    });
    
});

router.put("/confirm", (req, res)=> {
    const exe_id = req.body.eid;
    const t_id = req.body.tid;
    
    console.log("reached backend successfully");

    db.query("update testdrive set eid = ? where tid = ?; update testdrive set status = 'c' where tid = ?;", [exe_id, t_id, t_id], (err, result)=>{
        if(err){
            console.log(err);
            res.send({status : "false"});
        }
        else{
            console.log("got db result");
            console.log("updated successfully");
            res.send({status : "true"});
        }
    });
});

router.get("/legacy", (req, res)=> {
     console.log("reached backend successfully");
    db.query("select name, addr, c.mobno as cust_mobno, td_date, slot_name, model, type, exe_name, leg.mobno as exemobno from legacytestdrive leg inner join customerdetails c using(cid)", (err, result)=> {
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

module.exports = router;