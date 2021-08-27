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
        statement: 'Năm 202x: Thời đại của (Bitcoin?) Blockchain technology, Crypto technology',
        category: 'predict'
    }, {
        name: 'first_law',
        statement: 'Năm 2025: AR apps phát triển, mở ra kỷ nguyên mới của Internet, IT',
        category: 'predict'
    }, {
        name: 'first_law',
        statement: 'Năm 2023: Số lượng người chơi Dota 2 giảm mạnh do bị kéo sang loại hình game tương tác khác đơn giản để tham gia hơn',
        category: 'predict'
    }, {
        name: 'first_law',
        statement: 'Năm 2030: Công nghiệp vũ trụ phát triển (du lịch vũ trụ, di cư)',
        category: 'predict'
    }, {
        name: 'first_law',
        statement: 'Năm 2023: Phó thủ tướng VĐĐ lên làm thủ tướng, năm 2024: kinh tế Việt Nam cực thịnh, thị trường chứng khoán Việt Nam cực thịnh, thời kỳ phát triển cực thịnh của công nghệ cao, công nghệ ứng dụng tại Việt Nam',
        category: 'predict'
    }
]

Statement.insertMany(statementList)
    .then(res => console.log(res))
    .catch(e => console.log(e))