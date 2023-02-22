//Password
const bcrypt = require('bcrypt')
//db
const db = require('../data/database')


class User {
    constructor(email, password, name){
        this.email = email;
        this.password = password;
        this.name = name;
    }

    //email-check
    getUserWithSameEmail(){
        return db.getDb().collection('users').findOne({
            email: this.email
        })
    }

    async signup(){
        //hashed password
        const hashedPassword = await bcrypt.hash(this.password, 12);

        db.getDb().collection('users').insertOne({
            email: this.email,
            password: hashedPassword,
            name: this.name
        })
    }

    //Password Comparison
    hasMatchingPassword(hashedPassword){
        return bcrypt.compare(this.password, hashedPassword)
    }
}


module.exports = User;