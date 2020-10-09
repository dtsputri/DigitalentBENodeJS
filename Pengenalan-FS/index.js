const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile('index.html',function(err,data){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        if(err){
            console.error(err);
            res.write('terjadi keasalah pada server');
            res.end();
            return;
        }

        res.write(data)
        res.end()
    })
})

server.listen(8000)
console.log('server Listen port on 8000')