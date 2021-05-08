module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        name: {
            type: Sequelize.STRING
        },
        dateOfBirth: {
            type: Sequelize.DATE
        },
        gender: {
            type: Sequelize.BOOLEAN
        }
    });

    return Employee;
};