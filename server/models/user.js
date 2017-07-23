console.log('Friend Model...');
let mongoose = require('mongoose');
let bcrypt = require('bcryptjs')
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: [true, 'Please enter first name.'],
        minlength: 2,
    },
    last_name: {
        type: String,
        require: [true, 'Please enter last name.'],
        minlength: 2,
    },
    email: {
        type: String,
        require: [true, 'Please enter email.'],
        validate: {
            validator: function(v){
                return /\S*\@\S*\.\S+/g.test(v);
            },
            message: 'Email must be valid.'
        }
    },
    number: {
        type: Number,
        minlength: 7,
        maxlength: 10,
    },
    password: {
        type: String,
        require: [true, 'Please enter password']
    },
    addresses: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Address'
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    }]
}, {timestamps: true})

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
})
UserSchema.methods.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', UserSchema)
