const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema({
    taskname:{type:String},
    discription:{type:String,
    default:'No discription given'},
    category:{type:String,default:''},
    duedate:{type:String, default:''}
});
const appModel = mongoose.model('appModel',schema);

module.exports=appModel;