const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    const query = url.parse(req.url, true).query
    console.log(query); 
    const response = 'Keyword:' + query.keyword +' Hari:' +query.Hari
    res.write(response);
    res.end();
})
server.listen(8080);
console.log("server running on http://localhost:8080");
