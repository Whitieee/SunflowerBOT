const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json");

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  
  if (!message.content.startsWith(process.env.PREFIX.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  const args = message.content
    .trim().slice(process.env.PREFIX.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
    const embed = new Discord.MessageEmbed()
      .setTitle("OwO")
      .setColor("fff3f")
      .setDescription("dicc")
      .addField("<:certoooooooooo:767092932959797331>  **» Quem Utilizou:**", message.author.tag)
      .addField("<:staff:825830974088019968> » Mensagem Completa",`${message.content}`)
      .setFooter(new Date(message.createdTimestamp));
      message.reply(embed)
  } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("ready", () => {
  let activities = [
    `Utilize ${process.env.PREFIX}help para obter ajuda`,
    `O Servidor crescer rapidamente!`,
    `O Whiteee e He1Korno me Progamar!`,
    `Os Usuários se divertindo no chat!`
  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, {
    type: "WATCHING"
  }), 1000 * 60);
  client.user
    .setStatus("dnd")
    .catch(console.error);
  console.log("Estou Online!")
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token NjY0ODU0NzU4NjM2NTE5NDc0.XhdIPg.VOgwtVag4nuh_mDTALm_Uo6vKx0