if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const mongoose = require('mongoose');

const Statement = require('./models/statement')
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

const statementList = [
    {
        name: 'doctor_who',
        statement: '2025: AR apps',
        category: 'predict'
    }, {
        name: 'doctor_who',
        statement: 'Năm 2023: Blockchain technology',
        category: 'predict'
    }
]

Statement.insertMany(statementList)
    .then(res => console.log(res))
    .catch(e => console.log(e))