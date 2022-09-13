const taskContorller = require('../controllers/taskController.js')

const router = require('express').Router()

router.post('/addTask', taskContorller.createTask)

router.get('/allTasks', taskContorller.getAllTasks)



router.get('/:id', taskContorller.getOneTask)

router.patch('/:id', taskContorller.updateTask)

router.post('/:id', taskContorller.deleteTask)

module.exports = router