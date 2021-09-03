if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// const io = require('socket.io')(Server)

const Statement = require('./models/statement');
const { Server } = require('http');
const dbURL = process.env.DB_URL
// 'mongodb://localhost:27017/stateGround'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`MONGOOSE CONNECTED`)
    })
    .catch((err) => {
        console.log(`MONGOOSE HAS SOME ERROR :(`)
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    const statements = await Statement.find({})
    console.log(statements)
    res.render('index.ejs', { statements })
});

app.get('/.well-known/pki-validation/C913407D7B54879DB40B2CC3801C7AAA.txt', (req, res) => {
    res.sendFile(path.join(__dirname + '/C913407D7B54879DB40B2CC3801C7AAA.txt'))
});


app.listen(process.env.PORT || 3000, () => {
    console.log('LISTENING ON PORT custom')
})

