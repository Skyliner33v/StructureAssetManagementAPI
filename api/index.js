const express = require('express')
const consola = require('consola')

// Create express instance
const app = express()

// Require API routes
const bridges = require('./routes/bridges')
const transactions = require('./routes/transactions')

// Import API Routes
app.use(bridges)
app.use(transactions)

// Start the Server
app.listen()
consola.ready({
  message: 'API Server initialized and ready',
  badge: true
})

// Export the server middleware
module.exports = {
  path: '/api/v1',
  handler: app
}
