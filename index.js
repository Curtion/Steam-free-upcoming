const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");
const https = require("https");
const qs = require("qs");

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
  console.log("Ready!");
});
client.on("messageCreate", (message) => {
  try {
    const author = message.authorId;
    let gameInfo = {};
    if (author === "884623552584769546") {
      gameInfo.title = message.embeds.title;
      gameInfo.url = message.embeds.url;
      gameInfo.description = message.embeds.description;
    }
    const data = qs.stringify({
      text: gameInfo.title,
      desp: gameInfo.description,
    });
    const req = https.request(
      {
        hostname: "sctapi.ftqq.com",
        port: 443,
        method: "POST",
        path: "/SCT76304TUUqaQzaO4LuZPPPnpoxGjOf2.send",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          "Content-Length": data.length,
        },
      },
      (res) => {
        res.on("data", (d) => {
          console.log(d);
        });
      }
    );
    req.on("error", (error) => {
      console.error(error);
    });
    req.write(data);
    req.end();
  } catch (error) {
    console.error(error);
  }
});
client.login(token);
