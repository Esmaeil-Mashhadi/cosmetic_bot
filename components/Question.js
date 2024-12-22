const { Markup } = require("telegraf")
const problems = require("../data/Problems.json")
const DoubleButtonMaker = require("../utils/DoubleButtonMaker")

const Question = (ctx, problem, bot) => {
  if (problems[problem]?.options) {
    const data = Object.entries(problems[problem].options).map(
      ([key, value]) => {
        bot.action(key, (ctx) => {
          ctx.sendChatAction("typing")
          ctx.deleteMessage()
          Question(ctx, key, bot)
        })
        return Markup.button.callback(value, key)
      }
    )
    ctx.reply(
      problems.root.question,
      Markup.inlineKeyboard([...DoubleButtonMaker(data)])
    )
  }
}

module.exports = { Question }
