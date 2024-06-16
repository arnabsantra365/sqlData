const con = require('./connection')

con.connect((error)=>{
    if(error)
        throw error;

    con.query("select * from phonedata",(err,result)=>{
        if(err)
            throw err;
        console.log(result,"connected");
    })
})
