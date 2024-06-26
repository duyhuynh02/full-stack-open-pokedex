/* eslint-disable @stylistic/js/linebreak-style */
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error....')
  res.send('ok')
})

//do something here
//ok do something more!
//do some test - 3rd time
//test agian
//more tests
//test again 5s