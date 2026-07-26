const notificationModel = require("../models/notificationModel");
function createNotification(req,res){
    const {title,message} = req.body;
    notificationModel.createNotification(
        title,
        message,
        (err,result)=>{
            if(err){
                return res.status(500).json({
                    error: err.message
                    
                });
            }
            res.status(201).json({
                message: "Notification created successfully",
                data: result
            });
        }
    )

}