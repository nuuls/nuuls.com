var express = require('express')
var cors = require('cors')
var ws = require('ws')
var http = require('http')

var app = new express() 

const server = http.createServer(app)
const wss = new ws.Server({ server })

app.use(cors())

var counter = 0

app.get('/lul/counter', function(req, res) {
    res.json({
        counter: counter
    })
})

var clients = new Map()

function broadcast(count) {
    var msg = JSON.stringify({
        counter: counter
    })
    clients.forEach((client => {
        try {
            client.send(msg)
        } catch(err) {
            console.log(err)
        }
    }))
}

app.post('/lul/counter', function(req, res) {
    counter++
    res.json({
        counter: counter
    })
    broadcast(counter)
})

wss.on('connection', function(conn) {
    conn.on('message', function(msg) {
        console.log(msg)
    })
    conn.on('error', (err) => {
        clients.delete(conn)
    })
    conn.send('memes')
    clients.set(conn, conn)
})

server.listen(7333)