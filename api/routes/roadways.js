const { Router } = require('express')
const { poolPromise } = require('../db')

const router = Router()

// GET all roadways.
router.get('/roadways', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query('SELECT * FROM [ROADWAY]')
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

// GET roadway by GD.
router.get('/roadways/:id', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const roadwayGD = req.params.id
    const result = await pool
      .request()
      .query(`SELECT * FROM [ROADWAY] WHERE ROADWAY_GD = '${roadwayGD}'`)

    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

module.exports = router
