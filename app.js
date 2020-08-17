const Discord = require('discord.js');
const { config } = require("dotenv");
const utils = require('./utils')
const radioCMD = require('./cmds/radio')
const helpCMD = require('./cmds/help')
const ytdl = require('ytdl-core');
const bot = new Discord.Client();
const version = "1.0.0";
const prefix = "selphy! ";
config({ path: __dirname + "/.env" });

bot.on('ready', () => {
  console.log("Selphy ist on!");
  bot.user.setActivity("selphybot v" + version, {type: "LISTENING"});
})

bot.on('message', msg => {
  let cmd = msg.content;

  switch(cmd){
    case prefix + "radio":
       radioCMD.radio(msg);
    break;

    case prefix + "help":
      helpCMD.help(msg);
    break;
  }
});


bot.login(process.env.token);