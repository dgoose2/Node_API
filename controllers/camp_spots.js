const Camping = require("../models/camp_spots");

exports.getCampingSpots = (req, res, next) => {
    // return an array of posts
    Camping.find().then(foundSpots => {
        res.json({
            message: "All spots",
            spots: foundSpots
        });
    });
};

exports.getCampingSpot = async (req, res, next) => {
    // return an array of posts
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch {
        res.status(500).json({message: error.message})
    }
};
   
exports.addCampingSpot = (req, res, next) => {
    // get post's title and content from the request
    const name = req.body.name;
    const rating = req.body.rating;
    const categories = req.body.categories;
    const website = req.body.website;

    // create a new Post instance
    const spot = new Camping({
        name: name,
        rating: rating,
        categories: categories,
        website: website
    });

    spot.save().then(spotSaved => {
        res.status(201).json({
            message: 'Spot created successfully',
            spot: spotSaved
        });
    }).catch(err => console.log('err', err));
}