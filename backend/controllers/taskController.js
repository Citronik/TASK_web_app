const db = require('../models')

const Task = db.tasks
const User = db.users


const createTask = async (req, res) => {

    let info = {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        published: req.body.published ? req.body.published : false
    }

    const task = await Task.create(info)
    res.status(200).send(task)
    console.log(task)
}

//get all task

const getAllTasks = async (req, res) => {
    let tasks = await Task.findAll({})
    res.status(200).send(tasks)
}

//get single task

const getOneTask = async (req, res) => {
    let id = req.params.id
    let task = await Task.findOne({ where: { id: id }})
    res.status(200).send(task)
}

//update task

const updateTask = async (req, res) => {
    
    let id = req.params.id
    const task = await Task.update(req.body, {where: { id: id }})

    res.status(200).send(task)
}

//delete task by id

const deleteTask = async (req, res) => {
    let id = req.params.id
    await Task.destroy({ where: { id: id }})
    res.status(200).send('Task has been succesfully deleted')
}

module.exports = {
    createTask,
    getAllTasks,
    getOneTask,
    updateTask,
    deleteTask
}