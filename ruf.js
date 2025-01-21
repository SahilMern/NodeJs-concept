const jwt = require("jsonwebtoken")
const { log } = require("node:console")
const screat_key = "sahilyadavsahilyadavsahilyadavsahilyadav"
const data = async(req, res) => {
    const userData = {
        _id:1,
        name:"sahil"
    }
    const user = await jwt.sign(userData, screat_key)
    console.log(user);
    
}
data()