console.log('Product Model...');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcryptjs')

let ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
    },
    size: {
        type: String,
        required: true
    }
},
{timestamps: true})

let Product = mongoose.model('Product', ProductSchema)
