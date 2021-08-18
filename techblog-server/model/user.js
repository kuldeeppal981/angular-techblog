const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kuldeep45:Spidey12345@cluster.gz9ht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true , useCreateIndex: true});
var conn =mongoose.Collection;
 
var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,
 
});
 
var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;