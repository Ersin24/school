const path = require('path');
const express = require('express')

const authRoutes = require('./routes/auth.routes')

const app = express();

//ejs engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//static files
app.use(express.static('public'))

app.use(authRoutes)


app.listen(3000);