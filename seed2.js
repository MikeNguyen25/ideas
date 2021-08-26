const mongoose = require('mongoose');

const Statement = require('./models/statement')

mongoose.connect('mongodb://localhost:27017/stateGround', { useNewUrlParser: true, useUnifiedTopology: true })
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