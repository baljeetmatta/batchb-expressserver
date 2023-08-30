const express=require("express");
const app=express();
const fs=require("fs");
app.use(express.static("."));
app.use(express.urlencoded());

app.get("/login",(req,res)=>{
    console.log(req.query);
    res.send(`Welcome ${req.query.yourname}` );
})
app.post("/login",(req,res)=>{
    //console.log(req.body);
    fs.readFile("users.txt","utf-8",(err,data)=>{

        let records=JSON.parse(data);
        let results=records.filter((item)=>{
            if(item.username==req.body.yourname && item.password==req.body.yourpassword)
            return true;
        })
        if(results.length==0)
        res.send("Invalid user/password");
    else
    res.send("Welcome");

    })

})



app.listen(3000,(err)=>{
    console.log("Server Started....")
})