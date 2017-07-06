module.exports = (function () {
    'use strict';
    var router = require('express').Router();
    var path = require('path');

    var Todo = require("../core/models/todo.model");

    router.get('/', function (req, res) {
        res.sendFile(path.resolve('./public/index.html'));
    });

    router.get('/api/todos', function (req, res) {

        Todo.find(function (err, todos) {

            if (err)
                res.send(err);

            res.json(todos);
        });

    });


    router.post('/api/todos', function (req, res) {

        Todo.create({
            text: req.body.text,
            isCompleted: false
        }, function (err, todo) {

            if (err)
                res.send(err);

            Todo.find(function (err, todos) {
                if (err)
                    res.send(err);

                res.json(todos);
            });

        });
    });

    router.post('/api/todos/:model_id', function (req, res) {

        const modelId = req.params.model_id;

        Todo.findById({ _id: modelId }, function (err, todo) {
            if (err) {
                console.log("Error finding model...", err);
            } else {
                console.log("Model: " + todo);
                todo.isCompleted = !todo.isCompleted;
                todo.save();
            }
        });
    });

    // get and return all the todos after you create another
    router.delete('/api/todos/delete/:todo_id', function (req, res) {

        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            Todo.find(function (err, todos) {
                if (err)
                    res.send(err);

                res.json(todos);
            });
        });

    });


    return router;
})();
