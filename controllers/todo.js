// let path = require('path');
// let fs = require('fs')
let ListModel = require('../models/todo');

module.exports = {
    index: function(req, res){
        // let todoViewModel = {
        //     todo:{}
        // }
        // ListModel.findOne({text:req.body.description}, function(err, todo){
        //     if(err){
        //         throw err
        //     }
        //     todo.save();
        //     todoViewModel.todo = todo;
        //     res.render('todo', todoViewModel)
        // });

        newModel = new ListModel({text:req.body.description})
    
            newModel.save(function(err){
                if(err){
                    throw err;
                }
    
                res.redirect('/')
            })
    },
    remove: function(req, res){
        todo = new ListModel({text:req.body.description})
        
            todo.remove(function(err){
                if(err){
                    res.json(false)
                }
                else{
                    res.json(true)
                }
                res.redirect('/')
            });
    }
   
}

