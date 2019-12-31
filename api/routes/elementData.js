const { Router } = require('express')
const { poolPromise } = require('../db')

const router = Router()

// GET all Element Data.
router.get('/elementData', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query('SELECT * FROM [PON_ELEM_INSP]')
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

// GET Element Data by GD.
router.get('/elementData/:id', async (req, res, next) => {
  try {
    const pool = await poolPromise
    const elemDataGD = req.params.id
    const result = await pool
      .request()
      .query(
        `SELECT * FROM [PON_ELEM_INSP] WHERE PON_ELEM_INSP_GD = '${elemDataGD}'`
      )

    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

module.exports = router
