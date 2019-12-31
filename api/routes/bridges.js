const { Router } = require('express')
const { poolPromise } = require('../db')

const router = Router()

// GET all bridges.
router.get('/bridges', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query('SELECT * FROM [BRIDGE]')
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

// GET bridge by GD.
router.get('/bridges/:id', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const bridgeGD = req.params.id
    const result = await pool
      .request()
      .query(`SELECT * FROM [BRIDGE] WHERE BRIDGE_GD = '${bridgeGD}'`)

    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

module.exports = router
