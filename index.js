const express    = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT     || 4000
const ENV  = process.env.NODE_ENV || 'development'

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  const result = {
    msg : 'ok',
    env : ENV,
  }
  return res.json(result)
})

app.listen(PORT, () => {
  console.log('App running on port', PORT)
})

module.exports = app
