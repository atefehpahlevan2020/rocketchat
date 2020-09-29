const axios =require('axios')

async function createUser(req,res) {
  try {
    const res = await axios.post('/api/v1/users.create');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
exports.createUser = createUser
