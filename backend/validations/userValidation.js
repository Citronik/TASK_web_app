const { body, param, query } = require('express-validator')

const createUser = () => [
    body('username')
        .notEmpty()
        .isString()
        .isLength({ max: 50 }),
    body('email')
        .notEmpty()
        .isEmail(),
    body('password')
        .notEmpty()
        .isLength({ max: 50, min: 8 }),
    body('firstName')
        .optional()
        .isString()
        .isLength({ max: 50 }),
    body('lastName')
        .optional()
        .isString()
        .isLength({ max: 50 }),
];

module.exports = {
    createUser,
    
}