if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const mongoose = require('mongoose');

const Idea = require('./models/idea')
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

const ideaList = [
    {
        name: 'doctor_who',
        description: '2025: AR apps',
        category: 'scam'
    }, {
        name: 'doctor_who',
        description: 'Năm 2023: Blockchain technology',
        category: 'scam'
    }
]

Idea.insertMany(ideaList)
    .then(res => console.log(res))
    .catch(e => console.log(e))