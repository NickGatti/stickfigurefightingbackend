const express = require('express')
const session = require('express-session')
const path = require('path')

const app = express()
const port = 3000

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

const PlayerOne = {
    name: 'Player 1',
    active: false,
    session: null,
}

const PlayerTwo = {
    name: 'Player 2',
    active: false,
    session: null,
}

app.use('/', express.static(path.join(__dirname, '../../stickfigurefightingfrontend/build')))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})