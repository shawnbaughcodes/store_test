let mongoose = require('mongoose')
let User = mongoose.model('User')

class UsersController {
    index(req, res){
        User.find(req.body, function(err, users){
            if (err) {
                return res.json(err)
            }
            return res.json(users)
        })
    }
    show(req, res) {
        User.findById(req.body, function(err, user){
            if (err) {
                return res.json(user)
            }
            return res.json(user)
        })
    }
    create(req, res) {
        User.create(req.body, function(err, user) {
            if (err) {
                return res.json(err)
            }
            req.session.user_id = user._id
            return res.json(user)
        })
    }
    session(req, res){
        if (req.session.user_id) {
            return res.json({
                status: true,
                user_id: req.seesion.user_id
            })
        }
        return res.json({
            status: false
        })
    }
    logout(req, res){
        if(req.session.user_id){
            delete req.session.user_id
        }
        return res.json(true)
    }
}

module.exports = new UsersController();
