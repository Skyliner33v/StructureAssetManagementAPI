const sql = require('mssql/msnodesqlv8')
const consola = require('consola')
const dbConfig = require('./dbConfig')

// Swap between 'LOCAL', 'TEST' and 'PRODUCTION' environments
const env = 'TEST'
const connString = dbConfig.dbConfig[env].connectionString
const dbName = dbConfig.dbConfig[env].server

const poolPromise = new sql.ConnectionPool(connString)
  .connect()
  .then((pool) => {
    consola.success(`Connected to MSSQL server ${dbName}`)
    return pool
  })
  .catch((err) =>
    consola.error('Database Connection Failed! Bad Config: ', err)
  )

module.exports = {
  sql,
  poolPromise
}
