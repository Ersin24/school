const path = require('path');
const express = require('express')

//db
const db = require('./data/database')

//routes
const authRoutes = require('./routes/auth.routes')

const app = express();

//ejs engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//static files
app.use(express.static('public'))

app.use(authRoutes)

db.connectToDatabase().then(function(){
    app.listen(3000);
    console.log('Server is up!!!')
}).catch(function(error){
    console.log('Failed to connect to the database!')
    console.log(error);
})