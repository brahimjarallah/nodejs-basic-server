const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err
  //       res.writeHead(200, { "Content-Type": "text/html" })
  //       res.end(content)
  //     }
  //   )
  // }

  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "brahim jarallah", age: 32 },
  //     { name: "john doe", age: 30 },
  //   ]
  //   res.writeHead(200, { "Content-Type": "application/json" })
  //   res.end(JSON.stringify(users))
  // }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  )
  let extname = path.extname(filePath)
  let contentType = "text/html"
  switch (extname) {
    case ".js":
      contentType = "text/javascript"
      break
    case ".css":
      contentType = "text/css"
      break
    case ".json":
      contentType = "application/json"
      break
    case ".png":
      contentType = "text/png"
      break
    case ".jpg":
      contentType = "text/jpg"
      break
  }
  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(content, "utf8")
          }
        )
      } else {
        //some server error 500
        res.writeHead(500)
        res.end(`server error: ${err.code}`)
      }
    } else {
      //sucess
      res.writeHead(200, { "Content-Type": contentType })
      res.end(content, "utf8")
    }
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, console.log(`Server is running on port ${PORT}`))
