//const http=require("http")
const express=require("express");
const path=require("path");
//const server=http.createServer();
const app=express();
app.use(express.static("."));

app.listen(3000,(err)=>{
    console.log("Server STarted...")
});


//    //if(req.url=="/" && req.method=="GET")
// app.get("/",(req,res)=>{

//     console.log("/ handled")
//  //   res.write("Welcome to node js");
//    // res.end();
//   // res.send("Welcome to Nodejs");
//   res.sendFile(path.join(__dirname,"./index.html"));
// })
// // app.get("/style.css",(req,res)=>{

// //     //   res.write("Welcome to node js");
// //       // res.end();
// //      // res.send("Welcome to Nodejs");
// //      res.sendFile(path.join(__dirname,"./style.css"));
// //    })
// // app.get("*",(req,res)=>{
// //     res.send("Other");
// //    })
