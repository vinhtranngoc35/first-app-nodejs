const { check } = require('express-validator');

let validateOfEmployee = () => {
    return [
        check('name', 'name does not Empty').not().isEmpty(),
        check('name', 'name must be Alphanumeric').isAlphanumeric(),
        check('name', 'name more than 6 degits').isLength({ min: 6 }),
        check('dateOfBirth', 'Invalid birthday').isISO8601('yyyy-mm-dd'),
    ];
}


let validate = {
    validateOfEmployee: validateOfEmployee,
};

module.exports = { validate };