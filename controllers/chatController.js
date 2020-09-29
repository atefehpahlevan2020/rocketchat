const axios = require('axios')

async function createChat(req,res) {
  try{
    const res = await axios.post('/api/v1/chat.postMessage')
    console.log(res)
  } catch(err){
    console.log(err)
  }
}
exports.createMessage = createChat