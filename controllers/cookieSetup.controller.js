const cookieSetup = (req, res) => {
    console.log("cokkiee");
    res.cookie("cookie","sahil", {maxAge:900000, httpOnly:true})
    res.send("Cookie has been set!");
}

module.exports = {cookieSetup}