const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')
const colors = require('colors')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            });
        console.log(`Connected to DB: ${conn.connection.host}`.cyan.underline.bold)
    } catch (e) {
        console.log(`Error: ${e.message}`.red)
        process.exit()
    }
}


module.exports = connectDB;