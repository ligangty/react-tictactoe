'use strict'

class User {
  constructor(newOid, newName, newIsOnline){
    this._oid = newOid;
    this._username = newName;
    this._isOnline = newIsOnline;
  }

  get oid() {
    return this._oid;
  }

  get username(){
    return this._username;
  }

  get isOnline(){
    return this._isOnline;
  }

  set oid(newOid){
    this._oid = newOid;
  }

  set username(newName){
    this._username = newName;
  }

  set isOnline(newIsOnline){
    this._isOnline = newIsOnline;
  }
}

module.exports = User;
