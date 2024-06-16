const sql =  require ('mysql');

const connect = sql.createConnection({
    host:"sql12.freesqldatabase.com",
    user:"sql12714224",
    password:"2MlBDjnMQf",
    database:"sql12714224"
})

module.exports=connect;