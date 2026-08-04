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
function getAllNotifications(req,res){
    notificationModel.getAllNotifications((err,result)=>{
        if(err){
            return res.status(500).json({
                message: "Failed to get notifications"
            });
        }
        res.status(200).json(result);
    });
}

module.exports = {
    createNotification,
    getAllNotifications
};