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

router.post("/addExe", (req, res)=>{
    const name = req.body.exeName;
    const mobNo = req.body.exeMobNo;

    db.query('insert into executive (exename, exemobno) values(?, ?)', [name, mobNo], (err, result)=> {
        if(err){
            console.Console.log(err);
            res.send({status : "false"});
        }
        else{
            res.send({status : "true"});
        }
    });
});

router.get("/exeDetails", (req, res)=> {
      db.query('select * from executive where eid <> 18', (err, result)=> {
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

router.put("/updateExe", (req, res)=> {
    const id = req.body.exeId;
    const name = req.body.exeName;
    const mobno = req.body.exeMobNo;
    console.log("reached backend successfully");
    db.query('update executive set exename = ?, exemobno = ? where eid = ?', [name, mobno, id], (err, result)=>{
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

router.delete("/deleteExe/:id", (req, res)=>{
    const id = req.params.id;
    console.log("reached backend successfully");
    db.query('delete from executive where eid = ?', id, (err, result)=> {
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

router.post("/availExe", (req, res)=>{
    const tdate = req.body.date.substring(0,10);
    const tslot = req.body.slot;
    console.log(tdate);
    db.query('select * from executive where eid NOT IN (select eid from exesch where td_date = ? and td_slot = ?) and eid <> 18', [tdate, tslot], (err, result)=> {
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