const express = require('express')
const db = require('../models')
const { v4: uuidv4 } = require('uuid');
const Task = db.tasks
const User = db.users

exports.getAllUsers = async function(req, res, next) {
    try {
        const users = await User.findAll();
        if (users.length <= 0) {
            res.status(404).send({ message: 'user not found' });
        }
        res.status(200).send({
            message: 'Success',
            data: users,
        })
    } catch (error) {
        next(error);
    }
}

exports.getOneUser = function(req, res) {

    let qr = `select * from user where id='${req.params.id}'`;

    db.query(qr,(err, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send({
                message: err.message
            })
        }
        if (result.length>0) {
            res.status(200).send({
                message: 'single user',
                data: result
            });
        } else {
            res.status(404).send({
                message: 'data not found'
            })
        }
    })
}

exports.createUser = async function(req, res, next) {
    try {
        const { username, email, password, firstName, lastName } = req.body;
        const dataCreate = { username, email, password, firstName, lastName };
        const createUser = await User.create(dataCreate);
        if (!createUser) {
            res.status(500).send({
                message: 'User wasnt created!',
            });
        }
        res.status(200).send({
            message: 'Success',
            data: createUser
        });
    } catch (error) {
        next(error)
    }
}

exports.updateUser = function(req, res) {
    
}

exports.deleteUser = function(req, res) {
    
}