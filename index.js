const { Client, Intents } = require("discord.js");
const { token, serverKey } = require("./config.json");
const axios = require("axios");
const qs = require("qs");
const log4js = require("log4js");

log4js.configure({
  appenders: { message: { type: "file", filename: "message.log" } },
  categories: { default: { appenders: ["message"], level: "error" } },
});
const logger = log4js.getLogger("message");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
  partials: ["CHANNEL"],
});

client.once("ready", () => {
  logger.info("登录discord成功");
});
client.on("messageCreate", (message) => {
  try {
    const author = message.authorId;
    let gameInfo = {
      title: "",
      url: "",
      description: "",
    };
    if (author === "884623552584769546") {
      gameInfo.title = message.embeds.title;
      gameInfo.url = message.embeds.url;
      gameInfo.description = message.embeds.description;
      const data = qs.stringify({
        text: gameInfo.title,
        desp: gameInfo.url + "\n\n" + gameInfo.description,
      });
      axios
        .post(`https://sctapi.ftqq.com/${serverKey}.send`, data)
        .then((res) => {
          logger.info("推送消息成功：", res);
        })
        .catch((err) => {
          logger.error("推送消息失败：", err);
        });
    }
  } catch (error) {
    logger.error("未知错误：", error);
  }
});
client.login(token);
