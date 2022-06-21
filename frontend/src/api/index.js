const socket = new WebSocket('ws://localhost:9000/ws')

const connect = (callback) => {
  console.log('Connecting to websocket')

  socket.onopen = () => {
    console.log('Connected websocket')
  }

  socket.onmessage = (msg) => {
    console.log(`Message from websocket`, {msg})
    callback(msg)
  }

  socket.onclose = (e) => {
    console.log(`Websocket closed connection`, e)
  }

  socket.onerror = (err) => {
    console.error('Socket error', err)
  }
}

const sendMsg = (msg) => {
  socket.send(msg)
}

export { sendMsg, connect, socket }
