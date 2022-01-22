const mongoose = require("mongoose");
const connecttomongdb = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/NotesAPP", ()=>{
        console.log("Connected to Database");
    });
};
module.exports = connecttomongdb;