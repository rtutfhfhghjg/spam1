﻿const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "511942218479566859"; // ايدي السررفر
var channel = "511942218945396767";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**1 , 2 , 3 , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    
	client.guilds.get(server).channels.get(channel).send('**4 , 5 , 6 , emad , eeeeee , Drrrram , Dttttm , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NDcxNTA4MjU1NTc1OTAwMTkx.DszDRA.CDmA561pk7m3Z4Aa8zT3KGvjn9k");
