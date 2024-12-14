const { Markup } = require("telegraf")

const question_two = (ctx, problem) => {
  switch (problem) {
    case "hair":
      ctx.reply(
        "موی شما کدوم یکی از مشکلات زیر رو داره ",
        Markup.inlineKeyboard([
          [
            Markup.button.callback("ریزش مو دارم", "hairFall"),
            Markup.button.callback("موهام آسیب دیده ", "damagedHair"),
          ],
        ])
      )
      break

    case "faceSkin":
      ctx.reply(
        "مشکل پوستت چیه ؟",
        Markup.inlineKeyboard([
          [
            Markup.button.callback("پوستم چربه", "oilySkin"),
            Markup.button.callback("پوستم خشکه", "drySkin"),
          ],
          [
            Markup.button.callback("اصلاح موهای زائد صورت", "excessHair"),
            Markup.button.callback("پوستم مختلطه (چرب و خشک)", "mixedSkin"),
          ],
          [
            Markup.button.callback(
              " دیگر مشکلات رایج پوست (جوش ، چین و چروک و ..)",
              "otherSkinIssues"
            ),
          ],
        ])
      )
      break

    case "bodySkin":
      ctx.reply(
        "مشکل پوست بدن شما چیه؟",
        Markup.inlineKeyboard([
          [
            Markup.button.callback("پوست بدنم جوش میزنه", "acneSkin"),
            Markup.button.callback("پوست بدنم خشکه", "dryBodySkin"),
          ],
          [
            Markup.button.callback("پوست بدنم چربه", "oilyBodySkin"),
            Markup.button.callback("پوست بدنم لک داره", "spotedBodySkin"),
          ],
          [
            Markup.button.callback("موی زیر پوستی دارم", "SubcutaneousHair"),
            Markup.button.callback("اصلاح موی زائد بدن", "excessBodyHair"),
          ],
          [
            Markup.button.callback("تیرگی بدن", "darkBody"),
          ],
        ])
      )
      break

    case "foot":
      ctx.reply(
        "توی کدوم یکی مشاوره میخوای ؟ ",
        Markup.inlineKeyboard([
          [
            Markup.button.callback("دستام", "crackedFoot"),
            Markup.button.callback("پاهام", "dryFoot"),
          ],
        ])
      )
      break

    default:
      console.log("Invalid problem type:", problem)
      break
  }
}

const action_two = (bot) => {
  bot.action("hairFall", (ctx) => {
    ctx.sendChatAction("typing")
    ctx.deleteMessage()

  })
  bot.action("damagedHair", (ctx) => {
    ctx.sendChatAction("typing")
    ctx.deleteMessage()

  })
  bot.action("oilySkin", (ctx) => {
    ctx.reply("چربی ؟ عییی")
    ctx.deleteMessage()

  })
}

module.exports = { question_two, action_two }
