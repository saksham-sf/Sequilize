
module.exports = (sequelize,Sequelize)=>{
    const User = sequelize.define('user',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        first_name:{
            type:Sequelize.STRING
        },
        middle_name:{
            type:Sequelize.STRING
        },
        last_name:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        phone:{
           type:Sequelize.STRING
        },
        address:{
            type:Sequelize.STRING
        }
    });
    return User;
}