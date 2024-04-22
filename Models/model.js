const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Organization = sequelize.define('organization',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    confirmed_times: {type: DataTypes.TIME},
})


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organization: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    game_mode: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Games = sequelize.define('games',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userid_1: {type: DataTypes.INTEGER},
    userid_2: {type: DataTypes.INTEGER},
    date: {type: DataTypes.DATE},
    time: {type: DataTypes.TIME},
    game_mode: {type: DataTypes.STRING},
})



module.exports = {
    Organization,
    User,
    Games
}