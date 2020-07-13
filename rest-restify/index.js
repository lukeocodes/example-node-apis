// index.js

var restify = require('restify')

const port = process.env.PORT || 3000
var server = restify.createServer()

server.get('/example', (req, res, next) => {
  res.json({ message: 'Restify: Looks good to me!' })
  next()
})

server.listen(port, function() {
  console.log(`listening on port ${port}`)
})