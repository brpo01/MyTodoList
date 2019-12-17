let router = require('express').Router();
let index = require('../controllers/index');
let todo = require('../controllers/todo');

module.exports = function(app){
    router.get('/', index.index);

    router.post('/upload', todo.index)
    router.delete('/todo/:todo_id', todo.remove)
    app.use(router);
}