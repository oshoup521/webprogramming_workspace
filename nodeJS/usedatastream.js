const fs = require("fs");
rs = fs.createReadStream("testdata.txt");
var d="";
rs.on("data",function(ch){
    d=d+ch;
    console.log("data event occured "+ch.length);
    console.log(ch);
});
rs.on("end",function(){
    console.log(d);
})