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

router.post('/register', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const cust_name = req.body.name;
    const cust_mobno = req.body.mobno;
    const cust_addr = req.body.addr;
    console.log("reached to server, lets hope for the best");
    db.query("call registercustomer(?, ?, ?, ?, ?)", [username, password, cust_name, cust_addr, cust_mobno], (err, result)=> {
        if(err){
            res.send({regStatus : "false"});
            console.log(err);
        }
        else{
            res.send({regStatus : "true"});
        }
    });
});

router.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    console.log("reached backend, lets hope for te best");
    
    db.query("select * from login where username = ? and password = ?", [username, password], (err, result)=> {
        if(err){
            console.log({err : err}); 
        }
        
        if(result.length > 0){
            console.log("got response from database");
            console.log("reached before session creation");
            req.session.user = [{cid :  result[0].cid, username : result[0].username, role : result[0].role}];
            console.log("reached after session creation");
            console.log(req.session.user);
            res.send([{cid :  result[0].cid, username : result[0].username, role : result[0].role}]);
        }
        else{
            res.send({message : "wrong combination!!"});
        }
    });

});


router.get("/login", (req, res) =>{
    if(req.session.user){
        res.send({loggedIn : true, user : req.session.user});
    }
    else{
        res.send({loggedIn : false});
    }
});

router.get("/logout", (req, res) =>{
    console.log('Hello my logout page');
    res.clearCookie('userId', {path : '/'});
    res.status(200).send('user logout');
});


module.exports = router;