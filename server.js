let express = require('express'),
    bp = require('body-parser'),
    session = require("express-session");
    mongoose = require('mongoose')
    morgan = require('morgan');
    root = __dirname,
    port = process.env.PORT || 8000,
    app = express();

app.use(express.static(root + '/public/dist'));
app.use(morgan('tiny'));
app.use(bp.json());
app.use(session({
    secret: 'mysupersecretsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

require('./server/config/mongoose');
require('./server/config/routes.js');
require('./server/config/routes.js')(app);

mongoose.Promise = global.Promise;

app.listen(port, function() {
    console.log('Running on port 8000...');
});
