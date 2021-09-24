import * as http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListen = () => console.log(`Listening on http://localhost:1000`);

// http server 위에 webSocket server를 구축한 형태
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// socket = browser connected
function handleConnection(socket) {
    console.log(socket);
}
wss.on('connection', handleConnection);

server.listen(1000, handleListen);


