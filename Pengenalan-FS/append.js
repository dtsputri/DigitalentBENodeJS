// var fs = require('fs');

// fs.appendFile('myappendfs.txt', 'hello this is appendjs', function(err){
//     if(err) throw err;
//     console.log('file saved!');
// });
var fs = require('fs');

fs.appendFile('myappendfs.txt', 'hello this is appendjs', function(){
    // if(err) throw err;
    console.log('file saved!');
});
