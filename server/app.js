const express = require("express");
var cors=require('cors');
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// app.use(require('./utils/cors'));
app.use(cors());
app.use("/login",(req,res)=>{
    let data = req.body;
    console.log("login called",data);

    const claimOperations = require("./db/helpers/claimcrud");
    claimOperations.login(data,res);
});
app.use("/claimlogin",(req,res)=>{
    let data = req.body;
    const claimOperations = require("./db/helpers/claimcrud");
    claimOperations.claimlogin(data,res);
});
app.use("/claimreg",(req,res)=>{
    let data = req.body;
    const claimOperations = require("./db/helpers/claimcrud");
    claimOperations.claimreg(data,res);
});

app.listen(process.env.PORT || 5000, (err) =>{
    if(err){
        console.log('Error on Server Start ',err);
        throw err;
    }
});