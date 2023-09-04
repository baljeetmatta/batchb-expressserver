const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{

    res.send("Order Home Page");
})

router.get("/details/:x",(req,res)=>{

    res.send("Order Details Page"+ req.params.x);

})

router.get("/history",(req,res)=>{

    res.send("Order History Page");
})
module.exports=router;

