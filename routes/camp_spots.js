const express = require('express');
const spotsController = require('../controllers/camp_spots');
const router = express.Router(); // create a router

const Model = require('../models/camp_spots');

router.get('/getSpots', spotsController.getCampingSpots); // GET 
router.post('/addSpot', spotsController.addCampingSpot); // POST /feed/post will be handled right now

router.get('/getSpot/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch {
        res.status(500).json({message: error.message})
    }
}); // GET

router.patch('/update/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options);

        res.send(result)
    }catch {
        res.status(500).json({message: error.message})
    }
}); // UPDATE

router.patch('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`)
    }catch {
        res.status(400).json({message: error.message})
    }
}); // DELETE

module.exports = router; // export the router