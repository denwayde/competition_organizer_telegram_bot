const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()



const bot = new TelegramBot(process.env.TOKEN, {

    polling: true
    
})

bot.on("message", async msg =>{
    let text =  msg.text;
    let chatId = msg.chat.id
    try{
        if(text === "/start"){
            await bot.sendMessage(chatId, "Hello JS BOT!")
        }
        else if (text === "gen") {
            let msgWait = await bot.sendMessage(chatId, "Bot generate messages")
            setTimeout(async ()=>{
                await bot.deleteMessage(msgWait.chat.id, msgWait.message_id)
                let randNum = Math.random()*10
                await bot.sendMessage(chatId, `Generated number is ${randNum}`)
            }, 5000)
        }
    } 
    catch(err){
        console.log(err)
    }
    
})