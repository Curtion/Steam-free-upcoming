const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");
const axios = require("axios");
const log4js = require("log4js");

log4js.configure({
  appenders: { message: { type: "file", filename: "message.log" } },
  categories: { default: { appenders: ["message"], level: "info" } },
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
    if (author === "884623552584769546") {
      axios
        .post(`https://steam.3gxk.net/emit.php`, message.embeds)
        .then((res) => {
          logger.info("推送消息成功：", res.data);
        })
        .catch((err) => {
          logger.error("推送消息失败：", err.data);
        });
    }
  } catch (error) {
    logger.error("未知错误：", error);
  }
});
client.login(token);
