var exp=require('express');
var f = require('fs');


var app=exp();

app.listen(9000,function()
{
console.log("server started");
});

app.get("/home",function(req,res)
{    
     
     res.write("In genral middleware");
     res.end();
});

app.use(function(req,res,next)
{   
    var date= new Date();
    var str= date+req.url+"\n"
    f.appendFile('log.txt',""+str,function(err1)
    {
       if(!err1)
           console.log("writing successful");  
    });
    next();
        
});