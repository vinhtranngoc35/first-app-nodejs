module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1qaz0plm!@#$",
    DB: "study_nodejs",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};