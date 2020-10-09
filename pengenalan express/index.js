const express = require('express');
const app =express();

app.set('view engine', 'ejs');

app.get('/pelatihan', function(req,res,next){
    res.render('body',{ subBab: req.query.subBab})
})

app.get('/about',function(req,res,next){
    console.log(req.query);
    res.send({success: true, keyword: req.query.keyword});
});

app.get('/txt-respose',function(req,res,next){
    res.send('hello world!');
});

app.get('/product/:productId1', function(req,res,next){
    console.log(req.params);
    res.send('success');
});

app.get('/product2/:productId2', function(req,res,next){
    console.log(req.params);
    res.send({success: true, productId2: req.params.productID2});
});

app.get('/category/:productCategory/product/:producId',(req,res,net)=>{
    res.send(req.params);
});

app.get('/multi-handler', function(req,res,next){
//validasi data req
    if(req.query.keyword==='satu'){
        return next();
    }
    return res.send('keyword harus satu');
},function (req,res,next){
    res.send('success')
});

app.get('/error',(req,res,next)=>{
    next(new Error('contoh error'));
});

app.use((err,req,res,next)=>{
    console.error(err);
    res.send('tejadi error');
});

app.listen(8000, function(){
    console.log('App listen on port 8000');
});

app.get('/index',(req,res,next)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html')

})

app.get('/pdf2',(req,res,next)=>{
    console.log(__dirname);
    res.download(__dirname +'/1.pdf','health.pdf')
})

app.get('/pdf',(req,res,next)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/1.pdf')
})
