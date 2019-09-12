'use strict'
const cors = require('cors'); //comunicación front y back
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const properties= require('./config/properties');
const DB = require ('./config/db');

//init DB
DB();

const app=express();
const router=express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded=bodyParser.urlencoded({extended:true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors()); //admite todas las peticiones al server

app.use('/api', router);
authRoutes(router);
router.get('/',(req, res)=>{
    res.send('Hello from Home');
});
app.use(router);

app.listen(properties.PORT, ()=> console.log('server running on port',properties.PORT) ); 
