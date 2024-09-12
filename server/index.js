const mysql=require("mysql");

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"blog app"
});
connection.connect(function (err) {
    if(err)
    {
        console.log(err.code);
        console.log(err.fatal);
        
    }
})

$query= "SELECT * FROM user";

connection.query($query,function(err,rows,feilds){
    if(err)
    {
        console.log("an error occurred");
        return;
    }

    console.log("querry successfull",rows);
});

connection.end(()=>{
    console.log("connection end");
    
});