var express = require("express");

var app = express();
app.set("views",__dirname+"/views");
app.set("view engine",'ejs')

app.get('/',function(request,response){

response.send('<a href="/cars">Cars</a><br><a href="/cats">Cats</a>');
});

app.get('/cats',function(request,response){

    cats=["cat1.jpeg","cat2.jpeg"]
    response.render('main',{pics:cats});

})

app.get('/cars',function(request,response){

    cats=["car1.jpeg","car2.jpeg"]
    response.render('main',{pics:cats});

})

app.use(express.static(__dirname+"/static"))
app.listen(8000,function(){
    console.log("listening on port 8000")
})