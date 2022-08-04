const express = require('express');
const router = express.Router();
const College = require("../models/College.js");

router.get('/colleges',async(req, res) => {
    const options = {...req.query};

    const colleges = await College.find({}).select(req.query);
    res.send(colleges);
})

router.get('/college/:id',async(req, res) => {
    const college_id = req.params.id;
    const college = await College.findById(college_id);
    console.log(college);
    res.send(college);
})

router.get('/place',async (req, res) => {
    const city = req.query.city;
    console.log(city);

    await College.find({ city: city}, function (err, docs) {
        if (err){
            console.log("Place",err);
        }
        else{
            console.log("First function call : ", docs);
            res.status(200)
            res.send(docs);
        }
    });
});

router.get('/vr/:id',async(req, res) => {
    const college_id = req.params.id;
    console.log(college_id);
    const college = await College.findById(college_id, {vr:1,_id:0});
    console.log("College",college);
    res.send(college);
})  

router.get('/list',async(req, res) => {
    College.find().distinct('city', function(error, list) {
        console.log(list);
        res.send(list);
    });
})  

router.get('/',(req,res) => {
    res.send("Welcome to CAMPA");
});

module.exports = router;