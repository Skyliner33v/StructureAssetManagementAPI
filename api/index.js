const express = require('express')
const consola = require('consola')

// Create express instnace
const app = express()
const host = process.env.HOST
const port = process.env.PORT

// Require API routes
const bridges = require('./routes/bridges')

// Import API Routes
app.use(bridges)

// Start the Server
app.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
