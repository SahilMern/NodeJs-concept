const jwt = require("jsonwebtoken")
const screte_key = "sahilyadavsahilyadavsahilyadavsahilyadav"
const data = jwt.sign({userId:1,
  name:"sahil"
},screte_key, {expiresIn:"1h"})
console.log(data, "data");

const verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJzYWhpbCIsImlhdCI6MTczODc1MTkxNiwiZXhwIjoxNzM4NzU1NTE2fQ.QyvZNHI5ajp5EhBQU55EvuWkyYjJUfP3BAtZ1iYp-X8", screte_key)

console.log(verify, "verify");

// req.headers["a"]
