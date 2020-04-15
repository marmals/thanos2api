const express = require('express');
const router = express.Router();
const assert = require('assert');

const Session = require('../models/session')

router.get("/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const session = await Session.findById(_id);
        res.send(session);
    }catch(err){
        console.error(err.message)
        return res.status(404).send("Something went wrong. Check the ID.");
    }
})
router.post("/:id/stop", async(req,res) => {
    try{
        const _id = req.params.id;
        const session = await Session.findById(_id);
        session.stopDate = new Date().toISOString();
        res.send(session);
    }catch(err){
        console.error(err.message)
        return res.status(404).send("Something went wrong. Check the ID.");
    }
})

router.post("/:id/locations", async(req,res) => {
    try{
        const _id = req.params.id;
        x = req.body.x;
        y = req.body.y;
        assert(x != undefined && y != undefined, "invalid body");
        const session = await Session.findById(_id);
        session.locations.push(
            {
                "x":x,
                "y":y
            }
        )
        await session.save();
        console.log(`saved location`);
        res.send(session)
    }catch(err){
        console.error(err);
        if(err.message == "invalid body"){
            return res.status(400).send(`Body is invalid. Expected json format: {"x":value,"y":value}`)
        }
        return res.status(500).send("Something went wrong. Check the ID.");
    }
})
router.get("/:id/locations", async(req,res) => {
    try{
        const _id = req.params.id;
        const session = await Session.findById(_id);
        res.send(session.locations);
    }catch(err){
        console.error(err);
        return res.status(500).send("Something went wrong. Check the ID.");
    }
})

router.post("/:id/collisions", async(req,res) => {
    try{
        const _id = req.params.id;
        x = req.body.x;
        y = req.body.y;
        assert(x != undefined && y != undefined, "invalid body");
        const session = await Session.findById(_id);
        session.collisions.push(
            {
                "x":x,
                "y":y
            }
        )
        await session.save();
        console.log(`saved collision`);
        res.send(session)
    }catch(err){
        console.error(err);
        if(err.message == "invalid body"){
            return res.status(400).send(`Body is invalid. Expected json format: {"x":value,"y":value}`)
        }
        return res.status(500).send("Something went wrong. Check the ID.");
    }
})
router.get("/:id/collisions", async(req,res) => {
    try{
        const _id = req.params.id;
        const session = await Session.findById(_id);
        res.send(session.collisions);
    }catch(err){
        console.error(err);
        return res.status(500).send("Something went wrong. Check the ID.");
    }
})


module.exports = router;