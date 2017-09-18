// app.js
const restify = require('restify')
const registerRoutesByPath = require('./register-routes-by-path')
const server = restify.createServer()
const path = require('path')

registerRoutesByPath(server, path.join(__dirname, './routes'))

server.listen(process.env.PORT || 8080, () => {
  console.log('%s listening at %s', server.name, server.url)
})
