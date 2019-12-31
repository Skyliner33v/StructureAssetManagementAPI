const { Router } = require('express')
const { poolPromise } = require('../db')

const router = Router()

// GET all structureUnits.
router.get('/structureUnits', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query('SELECT * FROM [STRUCTURE_UNIT]')
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

// GET structureUnit by GD.
router.get('/structureUnits/:id', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const structureUnitGD = req.params.id
    const result = await pool
      .request()
      .query(
        `SELECT * FROM [STRUCTURE_UNIT] WHERE STRUCTURE_UNIT_GD = '${structureUnitGD}'`
      )

    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

module.exports = router
