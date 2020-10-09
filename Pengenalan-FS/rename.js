var fs = require('fs');
fs.rename('myappendfs.txt', 'mytxt.txt', function(err){
    if(err){
        return console.error (err)
    }
    console.log("success")
})