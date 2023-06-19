var exp=require('express');
var app=exp();
app.listen(9000,function(req,res)
{
 console.log("server started");
});

app.use(exp.static('Images'));
app.get('/login',function(req,res)
{
    res.sendFile(__dirname+"/loginForm.html");
});
