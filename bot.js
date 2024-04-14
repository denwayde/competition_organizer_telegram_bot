const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
require('dotenv').config()

const token = process.env.TOKEN
const webAppURL = 'https://competitiom-organizer-web-app.netlify.app'

const bot = new TelegramBot(token, {polling: true});
const app = express();

const sequelize = require('./db')

app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'Добро пожаловать в бота который будет организовывать игру внутри организации.', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Зарегистрироваться', web_app: {url: webAppURL}}]
                ]
            }
        })
    }

})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT, ()=>{console.log(`Node server starts on port ${process.env.PORT}`)})
    } catch (error) {
       console.log(`Error on port listening: ${error}`) 
    }
}

start()
