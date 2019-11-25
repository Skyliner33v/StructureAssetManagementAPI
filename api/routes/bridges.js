const { Router } = require('express')

const router = Router()

// Mock Users
const bridges = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/bridges', function(req, res, next) {
  res.json(bridges)
})

/* GET user by ID. */
router.get('/bridges/:id', function(req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < bridges.length) {
    res.json(bridges[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
