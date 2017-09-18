const loadRoutesByPath = require('./load-routes-by-path')
const displayRoutes = require('./display-routes')
const registerRoute = require('./register-route')

/**
 * @method registerRoutesByPath
 * @param  {RestifyServer}      server  restify instance
 * @param  {String}             dirName
 */
const registerRoutesByPath = (server, dirName) => {
  const routes = loadRoutesByPath(dirName)

  routes.forEach(route => registerRoute(server, route))

  displayRoutes(routes)
}

module.exports = registerRoutesByPath
