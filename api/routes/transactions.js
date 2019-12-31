const { Router } = require('express')
const { poolPromise } = require('../db')
const { sql } = require('../db')

const router = Router()

// GET all API transactions.
router.get('/transactions', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query('SELECT * FROM [apiTransactions]')
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

// GET API transaction by GD.
router.get('/transactions/:id', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const transactionGD = req.params.id
    const result = await pool
      .request()
      .query(
        `SELECT * FROM [apiTransactions] WHERE transactionGID = '${transactionGD}'`
      )

    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

// POST API transaction.
router.post('/transactions', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const result = await pool
      .request()
      .input('tableName', sql.NVarChar, req.body.tableName)
      .input('apiRequestType', sql.NVarChar, req.body.apiRequestType)
      .input('status', sql.NVarChar, req.body.status)
      .input('numRows', sql.Int, req.body.numRows)
      .input('datePosted', sql.DateTime, req.body.datePosted)
      .query(
        'INSERT INTO [apiTransactions] (tableName, apiRequestType, status, numRows, datePosted) VALUES (@tableName, @apiRequestType, @status, @numRows, @datePosted)'
      )
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

module.exports = router
