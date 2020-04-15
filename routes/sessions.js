const express = require('express');
const router = express.Router();

const Session = require('../models/session')

router.get("/", async(req,res) => {
    const sessions = await Session.find();
    res.send(sessions);
})
router.post("/", async(req,res) => {
     const newSession = new Session();
     await newSession.save();
     console.log(`created new session, with id ${newSession._id}`);
     res.send(newSession);
})


module.exports = router;