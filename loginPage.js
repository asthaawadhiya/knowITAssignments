var exp=require('express');
var app=exp();
app.listen(9000,function()
{
console.log("Server started")
});

app.get('/login',function(req,res)
{
 res.sendFile(__dirname+"/loginForm.html");
});

app.get('/logincheck',function(req,res)
{
if(req.query.uid=="object" && req.query.pwd=="knowit")
   res.send("Login successful");
else
   res.send("Login Failed");
});

app.all('*',function(req,res)
{
res.send('Invalid URL');
});
