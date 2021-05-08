module.exports = app => {
    const employees = require("../controllers/employee.controller.js");
    var { validationResult } = require('express-validator');
    const { validate } = require("../validators/employee.validator");
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", validate.validateOfEmployee(), function (req, res, next) {

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            res.status(402).json({ errors: errors.array() });
            return;
        }
        employees.create(req, res);
    });

    // Retrieve all Tutorials
    router.get("/", employees.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", employees.findOne);

    router.put("/:id", employees.update);

    // Delete a Tutorial with id
    router.delete("/:id", employees.delete);

    app.use('/api/employees', router);
}