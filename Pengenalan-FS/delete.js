var fs = require('fs');
fs.unlink('mytxt.txt', function(err){
    if(err){
        return console.error (err)
    }
    console.log("success")
})