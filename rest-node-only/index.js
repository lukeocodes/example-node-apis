// index.js

const http = require('http')

const port = process.env.PORT || 3000

const requestHandler = (req, res) => {
  if (req.url === '/example'  && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Node.js only: Looks good to me!' }))
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Not found!' }))
  }
}

const server = http.createServer(requestHandler)

server.listen(port, () => {
  console.log(`listening on port ${port}`)
})