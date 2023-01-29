function getSignup(req, res){
    res.render('user/auth/signup')
}

function getLogin(req, res){

}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
}