const { Router } = require('express')
const { poolPromise } = require('../db')

const router = Router()

// GET all Inspection.
router.get('/inspections', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query('SELECT * FROM [INSPEVNT]')
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

// GET Inspection by GD.
router.get('/inspections/:id', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const inspectionGD = req.params.id
    const result = await pool
      .request()
      .query(`SELECT * FROM [INSPEVNT] WHERE INSPEVNT_GD = '${inspectionGD}'`)

    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

module.exports = router
