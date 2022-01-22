const express = require("express");
const mongoconnect = require("./ConnectToMongo");
const app = express();
const mongo_schema = require("./schema");
app.use(express.json());

app.get('/', (req, res)=>{
    return res.json("true");
});

app.post('/', async(req, res)=>{
    const body = req.body;
    console.log(body);
    const newnontes = new mongo_schema({
        author: body.author,
        notes: body.notes
    });
    await newnontes.save();
    return res.json("true-post");
});

app.listen(1233, ()=>{
    console.log("server started");
    mongoconnect();
})