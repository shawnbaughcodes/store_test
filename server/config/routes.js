console.log('Routes..');
let Users = require('../controllers/users')
let path = require('path')

module.exports = function(app) {
    app.get('/users', Users.index);
    app.get('/users/:id', Users.show);
    app.post('/users', Users.create);
    app.post('/users', Users.session);
    app.delete('/users/:id', Users.logout);

    app.all('*', function(req, res, next) {
		res.sendFile(path.resolve('./public/dist/index.html'))
	})
}
