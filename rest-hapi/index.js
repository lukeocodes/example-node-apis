// index.js

const Hapi = require('@hapi/hapi')

const port = process.env.PORT || 3000

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/example',
    handler: (req, h) => {
      return { message: 'hapi: Looks good to me!' }
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

init()