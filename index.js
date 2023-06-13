const express = require('express');
const port = 8000;
const path = require('path');

// add the mongodb connection and the model
const db = require('./config/mongoose');
const appModel = require('./model/todo-model');


const app = express();

// using body-parser to handle json req as well
var bodyParser = require('body-parser');

// setting middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// middleware
app.use(express.urlencoded());
app.use(express.static('asset'));

// setting view and view engine
app.set('views',path.join(__dirname,'view'));
app.set('view engine','ejs');




// updating the db
app.post('/update-task/:taskid', async (req,res)=>{
    const id = req.params.taskid;
    const dataUpdated = req.body.data;
    // console.log(req.body);
    await appModel.findOneAndUpdate(
        {_id:id},
        {
            taskname:dataUpdated
        })
    res.status(200).json({ message: 'Task updated successfully' });
    
})

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
        duedate:req.body.duedate,
    });
    return res.redirect('/');

})

// home
app.get('/' ,async function(req,res)
{
    const find = appModel.find({});
    find.select();
    const data = await find.exec();
    console.log(data);
    return res.render('index',{    
        taskList:data   ,
    });
})


app.listen(port,function(err){
    if(err)
        console.error("Error in starting server : "+err);
    
    console.log("Server Started successfully");
})


