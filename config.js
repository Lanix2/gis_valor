const express = require('express')
const {engine} = require('express-handlebars') 
const router = require(__dirname+'/backend/routes/routes')
var app = express();

app.engine('hbs', engine())
app.set('view engine', 'hbs')
app.set('views', __dirname+'/frontend/views')

app.use(router)
app.listen(3000, ()=>{console.log('servidor corriendo')})