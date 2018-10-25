'use strict'

var User = require("./User.js");

class UserService{
  constructor(){
    this._userCache = [];
  }

  getUserFromCacheByOid(oid){
    return this._userCache.find((u)=>u.oid===oid);
  }

  getUserByUsername(username){
    return this._userCache.find((u)=>u.username===username);
  }

  isUserRegistered(username) {
    return this._userCache.find((u)=>u.username===username) && true;
  }

  isUserExists(oid) {
    return this._userCache.find((u)=>u.oid===oid) && true;
  }

  addNewUser(user){
    this._userCache.push(user);
  }
}

module.exports=UserService;
