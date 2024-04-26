const ws = require('ws')
const server = new ws.Server({port: '3000' })

server.on('connection', massage => {
  socket.on(massage, massage => {
    const b = Buffer.from(massage)
    console.log(b.toString())
    socket.send(`${message}`)
  })
})
