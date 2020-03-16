const {User} = require('../models');
class Controller{
    static register(req, res, next){
        let dataRegister = {
            email: req.body.email,
            password: req.body.password,
            role: 'user',
            username: req.body.username
        }
        
        User.create(dataRegister)
        .then(data=>{
            res.status(201).json(data);
        })
        .catch(err=>{
            let errors = [];
            err.errors.forEach(error => {
                errors.push(error.message)
            });

            next({
                errors: errors,
                status: 400,
                msg: 'register error'
            });
        })
    }
}

module.exports = Controller;