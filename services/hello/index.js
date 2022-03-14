const express = require('express')
const app = express()
const port = 8000

app.get('/message', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
