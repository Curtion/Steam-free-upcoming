const { Client, Intents } = require("discord.js");
const fs = require("fs");
const { token } = require("./config.json");

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
  fs.appendFile("msg.log", JSON.stringify(message) + "\n", (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
client.login(token);
