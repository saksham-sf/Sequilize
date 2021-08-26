
const db = require('../config/db.config.js');

const User = db.user;

exports.create = (req,res)=>{
    let user = {};
    console.log('HIIII..')
    try{
        user.firstname = req.body.first_name;
        user.middlename = req.body.middle_name;
        user.lastname = req.body.last_name;
        user.email = req.body.email;
        user.phonenumber = req.body.phone;
        user.address = req.body.address;
        console.log(req.body);
        User.create(user).then(result=>{
            res.status(200).json({
                message:"upload successfully a user with id=" + result.id,
                users:[result],
                error:""
            });
        })
    }catch(error){
        res.status(500).json({
            message:"fail!",
            users:[],
            error:error.message
        });
    }
}


exports.getAlluser = (req,res)=>{
    try{
        User.findAll({
            
            include:[{
                model:db.role
                
            },
            {
                model:db.customer
            }
            ]
        })
        .then(userinfo=>{
            res.status(200).json({
                userinfo:userinfo,
                
            })
            console.log(userinfo);
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            error:error
        });
    }
}

exports.delete = async (req,res)=>{
    try{
        let userid =req.params.id;
        let user =  await User.findByPk(userid);

        if(!user){
            res.status(404).json({
                message:"Does not exist a user withid = " +userid,
                error:"404",
                users:[]
            })
        } else{
            await user.destroy();
            res.status(200).json({
                message:"Delete Successfully a user with id = " + userid,
                users:[user],
                error:""
            })
        }
    }catch(erroe){
        res.status(500).json({
            message:"Error-> Can not delete a user with id = " + userid,
            error:error.message,
            users:[]
        });
    }
}


exports.update = async (req,res)=>{
    try{
        let userid =req.params.id;
        let user = await User.findByPk(userid);
        
        if(!user){
            res.status(404).json({
                message:"Not Found For Updating a customer with id = " + userid,
                users:[],
                error:"404"
            })
        } else {
            let updateObject = {
                firstname:req.body.first_name,
                middlename:req.body.middle_name,
                lastname:req.body.last_name,
                email:req.body.email,
                phonenumber:req.body.phone,
            
                address:req.body.address,
            }
            let result = await User.update(updateObject,{returning:true, where:{id:userid}});

            if(!result){
                res.status(500).json({
                    message:"Error-> Can not update a user with id = " + req.params.id,
                    error:"Can Not Updated",
                    users:[]
                })
            }

            res.status(200).json({
                message:"Updates Successfully user with id = " + userid,
                users:[updateObject],
                error:""
            });
        }
        }catch(error){
            res.status(500).json({
                message:"Error-> Can not update a user with id = " + req.params.id,
                error:error.message,
                users:[]
            });
    }
}


exports.getAlluserById = async (req,res)=>{
    const user=await User.findOne({
        where:{id:req.params.id},
        include:[{
            model:db.role
            
        },
        {
            model:db.customer
        }
        ]
    

    })
    console.log(user);
    res.status(200).json(user);
  
  
  
  
  
    // try{
    //     let results;
    //     let userid =req.params.id;
    //     console.log(userid);
    //     await User.findOne({
    //         where:{id:userid}
    //     }).then(results=>{
    //         console.log(results);
    //     })
    //     if(results){
    //         users=results;
    //     }
    //     else{
    //         res.status(404).json({
    //             message:"Not Found For get a user with id = " + userid,
    //             users:[],
    //             error:"404"
    //         })
    //     }
    // }catch(error){
    //     console.log(error);
    //     res.status(500).json({
    //         error:error
    //     });
    // }
}