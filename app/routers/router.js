let express = require('express');

let router = express.Router();

const users = require('../controllers/controller.js');
router.post('/api/user/create',users.create);
// router.post('/api/user/create', function(req, res){
//     users.create
//   });
router.get('/api/user/get',users.getAlluser);
// router.get('/api/user/get', function(req, res){
//     users.getAlluser
//   });
router.put('/api/user/create/:id',users.update);
// router.put('/api/user/create/:id', function(req, res){
//     users.update
//   });
router.delete('/api/user/create/:id',users.delete);
// router.delete('/api/user/create/:id', function(req, res){
//     users.delete
//   });
router.get('/api/user/:id',users.getAlluserById);
// router.get('/api/user/:id', function(req, res){
//     users.getAlluserById
//   });




module.exports = router;
 

