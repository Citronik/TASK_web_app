const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    //console.log('prisiel som na validate')
    if (!errors.isEmpty()) {
      //console.log(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
}

module.exports = validate;