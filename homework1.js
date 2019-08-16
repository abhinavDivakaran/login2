const Express=require('express');

var app=new Express();

app.set('view engine','ejs');

app.get('/',(Request,Response)=>{
    res.render('index1');
});
app.get('/login',(Request,Response)=>{
    res.render('login1');
});
app.get('/register',(Request,Response)=>{
    res.render('register');
});
app.listen(3214,()=>{
    console.log("Working in progress...!");
});


