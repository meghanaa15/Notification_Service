const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.get("/",(req,res)=>{
    res.send("Welcome to Notification Service API");
});

router.post("/notifications",(req,res)=>{
    res.send("Notification received");
});

router.get("/notifications",notificationController.getAllNotifications);

module.exports = router;