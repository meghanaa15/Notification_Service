const notificationModel = require("../models/notificationModel");
function createNotification(req,res){
    const {title,message} = req.body;
    notificationModel.createNotification(
        title,
        message,
        (err,result)=>{
            
        }
    )

}