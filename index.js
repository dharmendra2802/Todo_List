const express = require('express');
const port = 8000;
const path = require('path');

// add the mongodb connection and the model
const db = require('./config/mongoose');
const appModel = require('./model/todo-model');


const app = express();

// middleware
app.use(express.urlencoded());
app.use(express.static('asset'));

// setting view and view engine
app.set('views',path.join(__dirname,'view'));
app.set('view engine','ejs');



// deleting
app.get('/delete-task/',async function(req,res){
    const id = req.query.id;
    await appModel.deleteOne({__id:id});
    return res.redirect('/');
})

// adding
app.post('/add-task',async function(req,res){
    await appModel.create({
        taskname:req.body.task,
        discription:req.body.discription,
        category:req.body.category,
        duedate:req.body.duedate
    });
    return res.redirect('/');

})

// home
app.get('/' ,async function(req,res)
{
    const find = appModel.find({});
    find.select();
    const data = await find.exec();
    // console.log(data);
    return res.render('index',{    
        taskList:data   
    });
})


app.listen(port,function(err){
    if(err)
        console.error("Error in starting server : "+err);
    
    console.log("Server Started successfully");
})