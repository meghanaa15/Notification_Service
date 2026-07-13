const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to Notification Service API");
});

router.post("/notifications",(req,res)=>{
    res.send("Notification received");
});

router.get("/notifications",(req,res)=>{
    res.send("All notifications");
});

module.exports = router;