const fs = require('fs');
fs,stat('mappendfs.txt', function(err,stats){
    if(err) {
        return console.log(err)
    }
    console.log(stats)
})
// fs.open('myappendfs2.txt', 'w', function (err){
//     if(err) 
//     console.log('saved')
// })