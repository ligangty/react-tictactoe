'use strict'

var User = require("./User.js");
var UserService = require("./UserService.js");

var user1 = new User("123456", "gli", true);
var user2 = new User("678905", "xuliu", true);
var user3 = new User("652498", "wguo", true);

var userService = new UserService();
userService.addNewUser(user1);
userService.addNewUser(user2);
userService.addNewUser(user3);

console.log(userService.getUserFromCacheByOid("123456"));
