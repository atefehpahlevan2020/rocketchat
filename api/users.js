class Users {
  constructor(client){
  this.client = client
  }

create (user, callback) {
  return this.client.request("POST", "users.create", user, callback);
  }
}

module.exports = Users

