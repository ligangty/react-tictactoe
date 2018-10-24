'use strict'

var User = require("./User.js");

class UserService{
  constructor(){
    this._userCache = [];
  }

  getUserFromCacheByOid(oid){
    return this._userCache.find((u)=>u.oid===oid);
  }

  addNewUser(user){
    this._userCache.push(user);
  }
}


module.exports=UserService;
