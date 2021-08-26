

module.exports = (sequelize,Sequelize)=>{
    const Role = sequelize.define('role',{
        rname:{
            type:Sequelize.STRING
        },
        rkey:{
            type:Sequelize.ENUM,
            values:[
                'Subscriber',
                'Admin',
                'SuperAdmin'
            ]
        },
        description:{
            type:Sequelize.STRING
        },
        rid:{
            type:Sequelize.INTEGER,
            primaryKey:true
        }

    });

    return Role;
}