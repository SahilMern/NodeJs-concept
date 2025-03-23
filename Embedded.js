console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");

const express = require('express');
const User = require('./models/Embedded');
const app = express()
const port = 3000
require("./Db/connection/config")
app.use(express.json())
app.post("/regsiter", async(req, res) => {
    try {
        console.log("Hey ");
        
        const {age, name} = req.body;
        const data = new User({
            age,
            name,
        });
        await data.save()
        return res.status(200).json({
            message:"All the Data",
            data:data
        })
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))