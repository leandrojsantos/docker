import Http from 'http'
import Io from 'socket.io'

const server = Http.createServer();
const io = Io(server);
const PORT = process.env.BACK_PORT || 3000

io.on('connection', client =>
    client.emit("change-pic", `./resources/2.jpg`)
);
server.listen(PORT);
console.log('listening at', PORT)
