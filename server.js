const express = require("express");

const app = express();

const notificationRoutes = require("./routes/notificationRoutes");

const PORT = 5000;

app.use(express.json());

app.use("/",notificationRoutes);

let notifications = [];

app.get("/",(req,res)=>{
   res.send("Welcome to Notification Service API");
});

app.post("/notifications",(req,res)=>{
   console.log(req.body);

    res.send("Notifications stored successfully");
});

app.get("/notifications", (req, res) => {
   res.json(notifications);
});


app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
});
