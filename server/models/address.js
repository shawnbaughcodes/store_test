console.log('Address Model...');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcryptjs')

let AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required:[true, 'Street required.']
    },
    city: {
        type: String,
        required:[true, 'City required.']
    },
    state: {
        type: String,
        required:[true, 'State required.']
    },
    zip: {
        type: Number,
        required:[true, 'Zip code required.']
    },
    country: {
        type: String,
        required: true
    }
}, {timestamps: true})

let Address = mongoose.model('Address', AddressSchema);
