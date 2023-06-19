var exp=require('express');
var app=exp();
app.listen(9000,function(){console.log("server started")});
app.get('/home',function(req,res)
{
 res.send("<h1>Welcome to expressJS</h1>");
});
app.all('*',function(req,res){
res.send('Invalid URL');
});
