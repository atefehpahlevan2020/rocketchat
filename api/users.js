require('./request')

class Users {
  constructor(client){
  this.client = client
  }

create (user, callback) {
  return this.client.sendRequest('post', 'users.create', user, callback);
  }
}

module.exports = Users
