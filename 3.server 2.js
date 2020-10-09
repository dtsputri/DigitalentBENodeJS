const http = require('http')

const server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('hi, selamat data di <b>NodeJS</b> ');
    res.end('<div>hi, selamat data di Node js</dib>');
});

server.listen(1000);
console.log('server running on http://localhost:1000');

// var http = require('http')

// var server = http.createServer(function (req, res){
//     res.end("hi, selamat data di node js");
// });

// server.listen(1000);
// console.log("server running on http://localhost:1000");