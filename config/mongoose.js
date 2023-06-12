const mongoose = require('mongoose');

main().catch(err=>console.log("Error in loading mongo - "+errr))
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1/todoApp-database');
    const db = mongoose.Connection;
    console.log("Mongodb is Connected");
}