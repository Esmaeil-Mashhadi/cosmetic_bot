const { Telegraf } = require("telegraf")
const { Question } = require("./components/Question")

require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) =>
  ctx
    .reply(
      `سلام ${ctx.from.first_name} جان خوش اومدی 😍 
    تو کدوم یکی از موارد زیر مشاوره میخوای ؟ `
    )
    .then(() => {
      Question(ctx, "root", bot)
    })
)

bot.hears(
  [/درخواست مشاوره/, /شروغ/, /start/, /مشاوره/, /سلام/, /های/, /hi/, /hello/],
  (ctx) => {
    ctx.sendChatAction("typing")
    ctx.reply(`سلام ${ctx.from.first_name} جان خوش اومدی 😍`)
    Question(ctx, "root", bot)
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

bot
  .launch()
  .then(() => {
    console.log("bot is running")
  })
  .catch((err) => {
    console.log(err)
  })
