const express = require('express')
const consola = require('consola')

// Create express instance
const app = express()

app.use(express.json())

// Require API routes
const transactions = require('./routes/transactions')
const bridges = require('./routes/bridges')
const structureUnits = require('./routes/structureUnits')
const roadways = require('./routes/roadways')
const inspections = require('./routes/inspections')
const elementData = require('./routes/elementData')

// Import API Routes
app.use(transactions)
app.use(bridges)
app.use(structureUnits)
app.use(roadways)
app.use(inspections)
app.use(elementData)

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
