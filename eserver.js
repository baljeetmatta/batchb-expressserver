const express=require("express");
const app=express();
const path=require("path");
const order_router=require("./routing/orderroute");
app.use("/o",order_router);

app.use(express.static("public"));
//
// /orders
//  /
// /details
// /history

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/login.html"));

})
app.get("/gmap/:from/:to",(req,res)=>{
  res.send(req.params.from +" "+req.params.to)
})
// app.get("/orders",(req,res)=>{
//     res.send("Orders Home Page")

// })
// app.get("/orders/history",(req,res)=>{
//     res.send("Orders History Page")

// })
// app.get("/orders/details",(req,res)=>{
//     res.send("Orders Detailss Page")

// })
// /orders/ ----Orders Home Page
// /orders/history  - Previous Order
// /orders/details  - Product Details

app.listen(3000,(err)=>{

    console.log("Server started...")
})
