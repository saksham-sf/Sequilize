const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database,env.username,env.password, {
    host:env.host,
    dialect:env.dialect,
    operatorsAliases:false,

    pool:{
        max:env.max,
        min:env.pool.min,
        acquire: env.pool.acquire,
        ilde:env.pool.ilde
    }
});

const db={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize,Sequelize);
db.customer = require('../models/customer.model.js')(sequelize,Sequelize);
db.role = require('../models/role.model.js')(sequelize,Sequelize);

db.user.hasOne(db.customer,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
})


db.user.hasOne(db.role,{
    foreignKey:'rid',
    onDelete:'CASCADE'
})

module.exports = db;