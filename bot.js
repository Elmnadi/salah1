const Discord = require("discord.js");
const MooDY = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`الاعتزال قريبأ`,'https://www.twitch.tv/iTzSatan98');
  console.log("["+client.user.username+"] Online now !!");
});
client.login(process.env.TOKEN);