var express = require('express');
const { response } = require('../app');
var userModel = require('../model/user');
var router = express.Router();
 
/* GET users listing. */
// router.get('/', function(req, res, next) {
 
//   var userDetails = new userModel({
//     name: 'kuldeep',
//     email: 'kp@gmail.com',
//     password: 'kuldeep@123',
    
//   });
 
//   userDetails.save(function(err,req1){
//     if(err) throw err;
   
//     res.render('index', { title: 'User Data Inserted' });
       
//   })
 
  
// });

router.post('/register',function(req,res,next){

  var userDetails=new userModel({
    name:req.body.Name,
    email:req.body.Email,
    password:req.body.Password,

  });

  userDetails.save().then(response=>{
    res.status(201).json({
      messagedb:"inserted successfully",
      results:response
    });
  })
  .catch(err=>{
    res.json(err);
  });
});

 
module.exports = router;