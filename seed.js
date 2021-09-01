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
        name: 'first_law',
        description: '2030: Space technology blooms (space travel, space migration)',
        category: 'predict'
    }, {
        name: 'first_law',
        description: '2026: Vice president Mr Vu Duc Dam becomes Vietnamese president. 2024: Vietnamese economics reaches prosperous, VN-index reaches the highest point in 20 years. This is gonna be the year for technology company in Vietnam reach its peak',
        category: 'predict'
    }
]

Statement.insertMany(statementList)
    .then(res => console.log(res))
    .catch(e => console.log(e))
