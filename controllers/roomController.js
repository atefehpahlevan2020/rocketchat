const axios = require('axios')

async function createRoom(req,res) {
  try{
    const res = await axios.post('/api/v1/rooms.createDiscussion')
    console.log(res)
  } catch(err){
    console.log(err)
  }
}
exports.createRoom = createRoom