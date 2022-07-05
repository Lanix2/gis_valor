var express = require('express')
var app = express();
const {engine} = require('express-handlebars') 
const router = require(__dirname+'/backend/routes/routes')

app.engine('hbs', engine())
app.set('view engine', 'hbs')
app.set('views', __dirname+'/frontend/views')

app.use(router)
app.listen(3000)