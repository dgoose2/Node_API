const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campSpotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Schema.Types.Number,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('CampSpot', campSpotSchema);