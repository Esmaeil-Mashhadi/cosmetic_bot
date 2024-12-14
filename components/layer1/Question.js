const { Markup } = require("telegraf")
const { question_two, action_two } = require("../layer2/Question")

const question_one = (ctx) => {
  return ctx.reply(
    "یکیش رو انتخاب کن",
    Markup.inlineKeyboard([
      [
        Markup.button.callback("مو", "hair"),
        Markup.button.callback("پوست صورت", "faceSkin"),
      ],
      [
        Markup.button.callback(" دست و پا ", "foot"),
        Markup.button.callback("پوست بدن", "bodySkin"),
      ],
    ])
  )
}

const action_one = (bot) => {
  bot.action("hair", (ctx) => {
    ctx.sendChatAction("typing")
    ctx.deleteMessage()

    question_two(ctx, "hair")
  })

  bot.action("faceSkin", (ctx) => {
    ctx.sendChatAction("typing")
    ctx.deleteMessage()

    question_two(ctx, "faceSkin")
  })
  bot.action("bodySkin", (ctx) => {
    ctx.sendChatAction("typing")
    ctx.deleteMessage()
    question_two(ctx, "bodySkin")
  })
  bot.action("foot", (ctx) => {
    ctx.sendChatAction("typing")
    ctx.deleteMessage()
    question_two(ctx, "foot")
  })

  action_two(bot)
}

module.exports = { question_one, action_one }
