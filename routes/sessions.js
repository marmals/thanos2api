const express = require('express');
const router = express.Router();

const Session = require('../models/session')

router.get("/", async(req,res) => {
    try{
        const sessions = await Session.find();
        res.json(sessions);   
    }catch(err){
        console.error(err.message)
        return res.status(500).send("Server Error")
    }
    
})
router.post("/start", async(req,res) => {
    try{
        const newSession = new Session();
        await newSession.save();
        console.log(`created new session, with id ${newSession._id}`);
        res.json(newSession);
    }catch(err){
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
     
})


module.exports = router;