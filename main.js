const { Telegraf, Markup } = require("telegraf")
const fs = require("fs")
const { question_one, action_one } = require("./components/layer1/Question")

require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) =>
  ctx
    .reply(
    `سلام ${ctx.from.first_name} جان خوش اومدی 😍 
    تو کدوم یکی از موارد زیر مشاوره میخوای ؟ `
    )
    .then(() => {
      question_one(ctx)
    })
)

bot.hears(
  [/درخواست مشاوره/, /شروغ/, /start/, /مشاوره/, /سلام/, /های/, /hi/, /hello/],
  (ctx) => {
    ctx.sendChatAction("typing")
    ctx.reply(`سلام ${ctx.from.first_name} جان خوش اومدی 😍`)
    question_one(ctx)
  }
)

bot.hears("test", (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "main menu", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "برو بوس بوس ", url: "https://boosboosshop.com" }],
      ],
    },
  })
})

action_one(bot)

bot
  .launch()
  .then(() => {
    console.log("bot is running")
  })
  .catch((err) => {
    console.log(err)
  })
