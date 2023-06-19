var exp=require('express');
var mysql=require('mysql2');
var cors = require('cors');
var bp=require('body-parser');
var app=exp();

app.use(cors());
app.use(bp.json());

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
 con.query("select * from empdata",function(err,result)
{
      if(!err)
       {
        //   res.write("<table border=1>");
        //   result.forEach(function(v)
        //   {
            //   res.write("<tr>");
            //   res.write("<td>"+v.EMPNO+"</td>");
            //   res.write("<td>"+v.ENAME+"</td>");
            //   res.write("<td>"+v.JOB+"</td>"); 
            //   res.write("<td>"+v.SAL+"</td>"); 
            //   res.write("</tr>");
            
        //   });
        //    res.write("</table>")
        //    res.end();
        // res.send(JSON.stringify(result))
        res.json(result);
         
       }
});
});

// app.post('/insertEmp',function(req,res)
// {
//     var empid=req.body.empid;
//     var ename=req.body.ename;
//     var sal = req.body.sal;
   
//     var query="insert into emp(EMPNO,ENAME,SAL) values (?,?,?,?)";
//     con.query(query,[empid,ename,sal,dept],function(err)
//     {
//         if(!err)
//         {
//             res.send("Insertion successful");
//         }
//         else{
//             res.send("insertion failed");
//         }
//     })

// })
app.post('/updateEmp',function(req,res)
{
    var empid=req.body.empid;
    var email = req.body.email;
   
    var query="UPDATE empdata SET email =? WHERE EMPNO=?";
    con.query(query,[email,empid],function(err)
    {
        if(!err)
        {
            res.send("updation successful");
        }
        else{
            res.send("updation  failed");
        }
    })

})


app.all('*',function(req,res)
{
  res.send("INVALID URL");
});



