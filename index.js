const { Client, Intents } = require("discord.js");
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
  console.log(message);
});
console.log("Reading");
client.login(token);
