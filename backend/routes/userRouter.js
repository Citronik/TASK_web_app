const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const validate = require('../middlewares/validate')
const validation = require('../validations/userValidation')

//GET ALL USERS
router.get('/', userController.getAllUsers )

//GET ONE USER
router.get('/:id', userController.getOneUser )

//CREATE A USER
router.post('/', validation.createUser(), validate, userController.createUser )

//UPDATE A USER
router.patch('/:id', userController.updateUser )

//DELETE A USER
router.delete('/:id', userController.deleteUser )

module.exports = router;