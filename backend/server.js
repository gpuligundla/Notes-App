const express = require("express");
const mongoconnect = require("./ConnectToMongo");
const app = express();
const mongo_schema = require("./schema");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get('/', async(req, res)=>{
    const noteslist = await mongo_schema.find();
    console.log(noteslist);
    return res.json(noteslist);
});

app.post('/', async(req, res)=>{
    const body = req.body;
    console.log(body);
    const newnontes = new mongo_schema({
        author: body.author,
        notes: body.notes
    });
    await newnontes.save();
    return res.json("true");
});

app.listen(1233, ()=>{
    console.log("server started");
    mongoconnect();
})