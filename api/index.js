const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const bridges = require('./routes/bridges')

// Import API Routes
app.use(bridges)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
