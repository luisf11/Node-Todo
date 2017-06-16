module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    var path = require('path');

    router.get('/', function(req, res) {
        res.sendFile(path.resolve('./public/index.html'));
    });

    router.get('/api/todos', function(req, res) {

        Todo.find(function(err, todos) {

            if (err)
                res.send(err);

            res.json(todos);
        });

    });


    router.post('/api/todos', function(req, res) {

        Todo.create({
            text: req.body.text,
            done: false
        }, function(err, todo) {

            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);

                res.json(todos);
            });

        });
    });


    // get and return all the todos after you create another
    router.delete('/api/todos/:todo_id', function(req, res) {

        Todo.remove({
            _id: req.params.todo_id
        }, function(err, todo) {

            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);

                res.json(todos);
            });

        });

    });


    return router;
})();
