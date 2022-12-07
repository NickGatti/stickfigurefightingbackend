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

const players = {
    playerOne: null,
    playerTwo: null,
}

app.use('/', express.static(path.join(__dirname, '../../stickfigurefightingfrontend/build')))

app.get('/player', (req, res) => {
    if (!players.playerOne) {
        players.playerOne = req.session.id
        req.session.player = 'Player one'
        res.json({
            player: 1,
        })
        console.log('Player One has joined.')
    } else if (players.playerOne && !players.playerTwo) {
        players.playerTwo = req.session.id
        req.session.player = 'Player two'
        res.json({
            player: 2,
        })
        console.log('Player Two has joined.')
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
