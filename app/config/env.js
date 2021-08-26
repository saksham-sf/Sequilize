const env = {
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root",
    database: "sakshamDbSequilize",

    pool:{
        max:8,
        min:0,
        acquire:30000,
        idle:10000
    }

};

module.exports = env