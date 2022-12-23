const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const employee = require('./moduleEmp');

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    for (const key in employee) {
        resp.send(employee.forEach(element => {
          document.write(element);  
        })
            )
    }
    
});
app.listen(3000);
console.log("connection established at 3000")