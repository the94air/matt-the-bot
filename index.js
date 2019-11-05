const Discord = require('discord.js');
require('dotenv').config();
const p = '!';

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
    status: "online",
    game: {
      name: "a game only for bots!",
      type: "PLAYING"
    }
  }); 
});

client.on('message', msg => {
  if (msg.content === `${p} ping`) {
    msg.reply('pong');
  }
});

client.login(process.env.SECRET);

require('http').createServer().listen(3000)
