const db =  require("../config/db");
function createNotification(title,message,callback){
    const query = `INSERT INTO notification(title,message) 
    VALUES(? , ?)
    `;
    db.query(query,[title,message],(err,result)=>{
        if(err){
            return callback(err,null);
        }
        callback(null,result);
    });
}

function getAllNotifications(callback){
         const query = `SELECT * FROM notification`;
         db.query(query,(err,result)=>{
            if(err){
                console.log("Get notifications error:", err);
                return callback(err,null);
            }
            callback(null,result);
         });

}

function getNotificationById(id,callback){
    const query =`SELECT * FROM notification WHERE id = ?`;
    db.query(query,[id],(err,result)=>{
        if(err){
            return callback(err,null);
        }
        callback(null,result);
    });
}
module.exports={
    createNotification,
    getAllNotifications,
    getNotificationById
};