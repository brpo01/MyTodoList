let routes = require('./routes');
let morgan = require('morgan');
let exphbs = require('express-handlebars');
let express = require('express');
let path = require('path');
let multer = require('multer')


module.exports = function(app){
    app.use(morgan('dev'));
    app.use('/public/', express.static(path.join(__dirname, '../public/')));
    app.use(multer({dest: './public/upload/temp'}).single('file'));
    
    
    routes(app);

    app.use(function(req, res){
        res.send('Route not Found');
    });

    app.engine('handlebars', exphbs.create({
        'defaultLayout':'main',
        'LayoutsDir':  app.get('views') + '/layouts',
        'partialsDir': app.get('views') + '/partials',
        // 'helpers':{

        //     timeago:function(timestamp){
        //         return moment(timestamp).startOf('minute').fromNow();
        //     },
        // }
        timeago:function(timestamp){
            return moment(timestamp).startOf('minute').fromNow();
        }
        
    }).engine);

    app.set('view engine', 'handlebars');

    return app; //this takes the app as a parameter then returns the app.
}