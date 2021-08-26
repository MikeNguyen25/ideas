const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Statement = require('./models/statement')

mongoose.connect('mongodb://localhost:27017/stateGround', { useNewUrlParser: true, useUnifiedTopology: true })
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

app.listen(process.env.PORT || 3000, () => {
    console.log('LISTENING ON PORT custom')
})

