const http = require("http")
http
  .createServer((req, res) => {
    res.write("Welcome Brahim")
    res.end()
  })
  .listen(5000, () => console.log("server running..."))
