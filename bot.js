const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
require('dotenv').config()

const token = process.env.TOKEN
const webAppURL = 'https://competitiom-organizer-web-app.netlify.app'

const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        // await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        //     reply_markup: {
        //         keyboard: [
        //             [{text: 'Заполнить форму', web_app: {url: webAppUrl + '/form'}}]
        //         ]
        //     }
        // })

        await bot.sendMessage(chatId, 'Добро пожаловать в бота который будет организовывать игру внутри организации.', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Зарегистрироваться', web_app: {url: webAppURL}}]
                ]
            }
        })
    }



