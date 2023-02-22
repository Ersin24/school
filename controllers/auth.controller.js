//User
const User = require('../models/user.model')


function getSignup(req, res){
    res.render('user/auth/signup')
}

async function signup(req, res){
    const user = new User(
        req.body.email,
        req.body.password,
        req.body.name
    )

    await user.signup();

    res.redirect('/giris-yap')
}

function getLogin(req, res){
    res.render('user/auth/login')
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
    signUp: signup,
}