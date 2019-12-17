let ListModel = require('../models/todo');


module.exports = {
    index: function(req, res){

        let viewModel = {
            lists:[]
        }
        ListModel.find({},{},{sort:{timestamp:-1}},function(err, lists){
            console.log(lists);
            if(err){
                throw err;
            }

            viewModel.lists = lists;
            res.render('index', viewModel);
        });
    }
}