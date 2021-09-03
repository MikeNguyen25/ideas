if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const path = require('path');
const methodOverride = require('method-override');
// const io = require('socket.io')(Server)

const dbURL = process.env.DB_URL
// 'mongodb://localhost:27017/stateGround'

// Socket Io
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        let randomNum = Math.floor(Math.random() * 100);
        socket.broadcast.emit('random', randomNum)
    }, 2000);

});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    res.render('index.ejs')
});

app.get('/.well-known/pki-validation/C913407D7B54879DB40B2CC3801C7AAA.txt', (req, res) => {
    res.sendFile(path.join(__dirname + '/C913407D7B54879DB40B2CC3801C7AAA.txt'))
});


server.listen(process.env.PORT || 3000, () => {
    console.log('LISTENING ON PORT custom')
})

