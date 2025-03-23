console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI ");

const express = require("express");
const ArrayField = require("./models/array.model");
const app = express();
const port = 3000;
app.use(express.json());
require("./Db/connection/config");
app.post("/add", async (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.body);
    const data = new ArrayField({
      name,
    });
    await data.save();
    return res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    console.log(error, "errro");
  }
});

app.post("/addValueInArray", async (req, res) => {
  try {
    const id = "67dfef8cc3804c8d8cb2b010";
    const { arrayField } = req.body;
    console.log(arrayField, "arrayField");
    const finddata = await ArrayField({id})
    console.log(finddata, "findadaa");
    // if()
    
    return res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    console.log(error, "errro");
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
