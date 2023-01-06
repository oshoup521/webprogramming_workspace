const fs = require("fs");
rs=fs.createReadStream("testdata.txt");
ws=fs.createWriteStream("samplecopy.txt");
rs.pipe(ws);