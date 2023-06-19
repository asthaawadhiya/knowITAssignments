var exp=require('express');
var mysql=require('mysql2');
var app=exp();
app.listen(9000,function()
{
 console.log("Server started");
});

var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"root",
database:"dac"
});

con.connect(function(err)
{
 if(!err)
     console.log("connected");
 else
    console.log("connection failed");
});

app.get('/emps',function(req,res)
{
 con.query("select * from emp",function(err,result)
{
      if(!err)
       {
          res.write("<table border=1>");
          result.forEach(function(v)
          {
              res.write("<tr>");
              res.write("<td>"+v.EMPNO+"</td>");
              res.write("<td>"+v.ENAME+"</td>");
              res.write("<td>"+v.JOB+"</td>"); 
              res.write("<td>"+v.SAL+"</td>"); 
              res.write("</tr>");
         
          });
           res.write("</table>")
           res.end();
       }
});
});
app.all('*',function(req,res)
{
  res.send("INVALID URL");
});



