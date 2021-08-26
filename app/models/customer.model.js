

module.exports = (sequelize,Sequelize)=>{
    const Customer = sequelize.define('customer',{
        cname:{
            type:Sequelize.STRING,
        },
        website:{
            type:Sequelize.STRING
        },
        address:{
            type:Sequelize.STRING
        },
        user_id:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        
    });

  

    return Customer;
}