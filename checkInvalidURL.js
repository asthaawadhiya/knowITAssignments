var exp=require('express');
var app=exp();
app.listen(9000,function(req,res)
{
console.log("server started");
});
app.use(function(req,res,next)
{
  console.log("in general middleware");
  next();
});
app.get('/home',function(req,res)
{
  res.send("<h1>Hello World</h1>");
});

app.all('*',function(req,res)
{
res.send("Invalid URL")
});