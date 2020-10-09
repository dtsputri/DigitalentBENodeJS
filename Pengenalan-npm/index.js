var http = require('http');
http.createServer(function(req,res){
    const currentDate= moment().format('LLLL')
    res.end(currentDate);
}).listen(8080);

console.log("server running on http://localhost:8080")