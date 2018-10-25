const express = require('express');
const os = require('os');
const User = require('./User.js');
const UserService = require('./UserService.js');

const app = express();

const userService = new UserService();

let server = app.listen(4000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});


app.use(express.static('build'));
app.get('/api/user/:name', function (req, res){
  let name = req.params.name;
  if(userService.isUserRegistered(name)){
    res.status(200).json(userService.getUserByUsername(name));
  }else{
    res.status(404).json({error: 'User not found!'});
  }
} );

app.post('/api/user/:name', function(req, res){
   let name = req.params.name;
   if(userService.isUserRegistered(name)){
     res.status(400).json({error: 'User has already been registered!'});
   }else{
     userService.addNewUser(new User("123456", name, true));
     res.status(200).send();
   }
});
