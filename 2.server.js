const http = require('http')

const server = http.createServer(function (req, res){
    res.end("hi, selamat data di node js");
});

server.listen(1000);
console.log("server running on http://localhost:1000");

// var http = require('http')

// var server = http.createServer(function (req, res){
//     res.end("hi, selamat data di node js");
// });

// server.listen(1000);
// console.log("server running on http://localhost:1000");