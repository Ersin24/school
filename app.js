const path = require('path');
const express = require('express');

//CSRF
const csrf = require('tiny-csrf');
const cookieParser = require('cookie-parser');

//Express-Session
const expressSession = require('express-session');

//Session
const createSessionConfig = require('./config/session')

//Database
const db = require('./data/database')

//Middleware
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandleMiddleware = require('./middlewares/error-handler');

//routes
const authRoutes = require('./routes/auth.routes');
const postsRoutes = require('./routes/posts.routes');
const baseRoutes = require('./routes/base.routes');

//APP WORKS
const app = express();

//ejs engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//static files
app.use(express.static('public'))

//Parsing
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("cookie-parser-secret"))

//config
const sessionConfig = createSessionConfig();
app.use(expressSession(sessionConfig));

//CSRF
app.use(csrf(
    "123456789iamasecret987654321look",
    ["POST"],
));
app.use(addCsrfTokenMiddleware);

//Routes
app.use(baseRoutes);
app.use(authRoutes);
app.use(postsRoutes);

//Middlewares
app.use(errorHandleMiddleware);

db.connectToDatabase().then(function(){
    app.listen(3000);
    console.log('Server is up!!!')
}).catch(function(error){
    console.log('Failed to connect to the database!')
    console.log(error);
})