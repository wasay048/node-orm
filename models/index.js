const {Sequelize, DataType} = require('sequelize')

const sequelize = new Sequelize('node_orm', 'abdulwasay', 'wasey@048', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {max: 5, min: 0, idle: 10000}
})

sequelize.authenticate()
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log(err)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

// db.users = require('./users')(sequelize, DataTypes)