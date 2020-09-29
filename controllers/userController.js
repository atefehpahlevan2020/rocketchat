const axios = require('axios')

async function createUser(req,res) {
    try {
        const response = await axios.post('/users.create');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
exports.createUser = createUser










// exports.register = async(req,res) => {
//     const { name , email , password } = req.body

//     const emailRegex = /@gmail.com|@yahoo.com|@outlook.com/

//     if(!emailRegex.test(email)) throw "Email is not supported from your domain."
//     if(password.length < 6) throw "Password must be atleast 6 characters long."


//     const userExists = await User.findOne({email})
//     if(userExists) throw "User with same email already exits"


//     const user = new User({ 
//         name,
//         email,
//         password : sha256(password + process.env.SALT) 
//     })

//     await user.save()

//     res.json({
//         message : `User ${name} registered successfuly!`
//     })
// }

// exports.login = async(req,res) => {
//     const {email , password} = req.body
//     const user = await User.findOne({
//         email,
//         password : sha256(password + process.env.SALT)
//     })
//     if(!user) throw "Email and Password did not match."


    
//     const token = await jwt.sign({id:user.id},process.env.SECRET)

//     res.json({
//         message: `User ${email} logged in successfully`,
//         token
//     })
// }


