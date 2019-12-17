let express = require('express');
let app = express();
let configure = require('./server/configure');
let mongoose = require('mongoose');


//CHECKS TO SEE IF THERE IS ANY PORT ENIRONMENT AND ASSIGNS IT TO THE KEY(i.e it becomes the value).
app.set('port', process.env.PORT || 8196);
//app.set('views', __dirname + '/views');

// we call our routes module to run the model and get our desired route.
app = configure(app);

mongoose.connect('mongodb://localhost:27017/Mytodolist', {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.on('error', console.error.bind(console, 'Database Connection Error'));
mongoose.connection.once('open', function(){
    console.log('Connected to Database');
});

// we tell the app to listen to any incoming messages, but before the app can listen it has to get the port!
app.listen(app.get('port'), function(req, res){
    console.log('You are Welcome to toDoList, app is listening at LocalHost:' + app.get('port'));
});