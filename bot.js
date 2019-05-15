const Discord = require("discord.js");
const MooDY = new Discord.Client();
MooDY.on('ready', () => {
  MooDY.user.setGame(`Ramadan Kareem`,'https://www.twitch.tv/iiMooDY9');
  console.log("["+MooDY.user.username+"] Online now !!");
});
MooDY.login(process.env.BOT_TOKEN);
