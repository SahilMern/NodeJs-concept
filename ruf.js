const EventEmitter = require("events")
const eventemitter = new EventEmitter()
eventemitter.on("greet", () => {
  console.log("heyylo");
  
})

eventemitter.emit("greet")
eventemitter.emit("hello")
