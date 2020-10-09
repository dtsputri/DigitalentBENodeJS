const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch(req.url){
        case'/about':
            res.write("ini adalah halam about");
        break;
        case'/profile':
            res.write("ini adalah halam profil");
        break;
        case'/produk':
            res.write("ini adalah halam produk");
        break;
        default:
            res.write("ini adalah halam default");
    }
      res.end();
})

server.listen(8000);
console.log("server running on http://localhost:8000");
