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
module.exports={
    createNotification
};