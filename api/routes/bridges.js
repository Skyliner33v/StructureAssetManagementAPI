const { Router } = require('express')
const { poolPromise } = require('../db')

const router = Router()

// Mock Users
// const bridges = [
//   { name: 'Alexandre' },
//   { name: 'Pooya' },
//   { name: 'Sébastien' }
// ]

/* GET users listing. */
router.get('/bridges', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query('SELECT TOP 10 * FROM [BRIDGE]')

    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

/* GET user by ID. */
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
