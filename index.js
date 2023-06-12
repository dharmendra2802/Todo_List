const express = require('express');
const port = 8000;
const path = require('path');


const app = express();

// middleware
app.use(express.urlencoded());
app.use(express.static('asset'));
// setting view and view engine
app.set('views',path.join(__dirname,'view'));
app.set('view engine','ejs');


app.get('/' , function(req,res)
{
    return res.render('index');
})

app.listen(port,function(err){
    if(err)
        console.error("Error in starting server : "+err);
    
    console.log("Server Started successfully");
})